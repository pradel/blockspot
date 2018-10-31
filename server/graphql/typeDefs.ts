export const typeDefs = `
  input InputCreatePlace {
    cityId: String!
    googleId: String!
    recaptcha: String!
    category: String!
  }

  type Query {
    _: Boolean
  }

  type Mutation {
    createPlace(input: InputCreatePlace!): places!
  }
`;
