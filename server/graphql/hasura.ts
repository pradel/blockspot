import { readFileSync } from 'fs';
import { resolve } from 'path';
import {
  makeRemoteExecutableSchema,
  transformSchema,
  FilterRootFields,
} from 'graphql-tools';
import fetch from 'node-fetch';
import { HttpLink } from 'apollo-link-http';

const hasuraTypeDefs = readFileSync(
  resolve(__dirname, '../../hasura/schema.graphql'),
  {
    encoding: 'utf8',
  }
);

const hasuraLink = new HttpLink({
  uri: `${process.env.HASURA_URL}/v1alpha1/graphql`,
  fetch,
} as any);

const hasuraExecutableSchema = makeRemoteExecutableSchema({
  schema: hasuraTypeDefs,
  link: hasuraLink,
});

export const transformedHasuraSchema = transformSchema(hasuraExecutableSchema, [
  new FilterRootFields(operation => {
    // Do not expose the mutations and subscriptions to the final graphql endpoint
    if (operation === 'Mutation' || operation === 'Subscription') {
      return false;
    }
    return true;
  }),
]);

export const hasuraSchema = transformedHasuraSchema;
