import { mergeSchemas } from 'graphql-tools';
import { QueryResolvers, MutationResolvers } from './types/resolvers';
import { typeDefs } from './typeDefs';
import { hasuraSchema } from './hasura';
import { createPlace } from './nutations/createPlace';

interface Resolvers {
  Query: QueryResolvers.Resolvers;
  Mutation: MutationResolvers.Resolvers;
}

const customResolver: Resolvers = {
  Query: {},
  Mutation: {
    createPlace,
  },
};

// merge the two schemas
export const mergedSchema = mergeSchemas({
  schemas: [hasuraSchema, typeDefs],
  resolvers: customResolver as any,
});
