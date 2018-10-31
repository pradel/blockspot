import { ApolloError, IGraphQLToolsResolveInfo } from 'apollo-server-express';
import { defer } from 'lodash';
import axios from 'axios';
import { CreatePlaceMutationArgs } from '../types/resolvers';
import { saveNewPlace } from '../../lib';
import { Category } from '../../types';
import { logger } from '../../utils/logger';
import { Context } from '../types/context';
import { hasuraSchema } from '../hasura';

export const createPlace = async (
  _: any,
  args: CreatePlaceMutationArgs,
  context: Context,
  info: IGraphQLToolsResolveInfo
) => {
  try {
    const response = await axios({
      method: 'post',
      url: `https://www.google.com/recaptcha/api/siteverify?secret=${
        process.env.GOOGLE_RECAPTCHA_SERVER_KEY
      }&response=${args.input.recaptcha}`,
    });
    if (!response.data.success) {
      throw new Error(response.data['error-codes']);
    }
  } catch (error) {
    throw new ApolloError('Recaptcha validation failed');
  }

  const dbPlace = await context.hasura.query.places({
    where: { google_id: { _eq: args.input.googleId } },
  });
  if (dbPlace[0]) {
    throw new ApolloError(`Place ${args.input.googleId} already exist`);
  }
  const dbCity = await context.hasura.query.cities_by_pk({
    id: args.input.cityId,
  });
  if (!dbCity) {
    throw new ApolloError(`City ${args.input.cityId} not found`);
  }

  const placeId = await saveNewPlace({
    googleId: args.input.googleId,
    cityId: args.input.cityId,
    category: args.input.category as Category,
    hasura: context.hasura,
  });

  if (process.env.SLACK_WEBHOOK_URL) {
    defer(async () => {
      try {
        const place = await context.hasura.query.places_by_pk({ id: placeId });
        if (!place) {
          throw new Error('Place not found.');
        }
        const city = await context.hasura.query.cities_by_pk({
          id: args.input.cityId,
        });
        if (!city) {
          throw new Error('City not found.');
        }

        await axios.post(process.env.SLACK_WEBHOOK_URL!, {
          text: `New place added: <${process.env.APP_URL}/place/${place.slug}|${
            place.name
          }> in <${process.env.APP_URL}/city/${city.slug}|${city.name}>.`,
        });
      } catch (error) {
        logger.error(
          `Slack notification failed in createPlace mutation, placeId: ${placeId}`,
          error
        );
      }
    });
  }

  // Delegate after sanitization and return created place
  return info!.mergeInfo!.delegateToSchema({
    schema: hasuraSchema,
    operation: 'query',
    fieldName: 'places_by_pk',
    args: { id: placeId },
    context,
    info,
  });
};
