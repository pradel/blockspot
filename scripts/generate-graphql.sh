get-graphql-schema http://localhost:3000/graphql > ./server/graphql/schema.graphql
yarn gql-gen --schema http://localhost:3000/graphql --template graphql-codegen-typescript-resolvers-template --out ./server/graphql/types/resolvers.ts
yarn apollo codegen:generate --schema './server/graphql/schema.graphql' --target typescript --addTypename --queries='./client/**/*.{ts,tsx}'
