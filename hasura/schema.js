const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
const { HttpLink } = require('apollo-link-http');
const { makeRemoteExecutableSchema } = require('graphql-tools');
const { sign } = require('jsonwebtoken');

const token = sign(
  {
    'https://hasura.io/jwt/claims': {
      'x-hasura-allowed-roles': ['admin'],
      'x-hasura-default-role': 'admin',
    },
  },
  process.env.JWT_SECRET
);

const typeDefs = fs.readFileSync(path.resolve(__dirname, 'schema.graphql'), {
  encoding: 'utf8',
});

const hasuraLink = new HttpLink({
  uri: `${process.env.HASURA_URL}/v1alpha1/graphql`,
  fetch,
  headers: {
    // All the requests from the server are in admin mode
    Authorization: `Bearer ${token}`,
  },
});

module.exports = makeRemoteExecutableSchema({
  schema: typeDefs,
  link: hasuraLink,
});
