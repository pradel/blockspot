get-graphql-schema http://localhost:8080/v1alpha1/graphql > ./hasura/schema.graphql
yarn graphql-binding --input ./hasura/schema.js --language typescript --outputBinding server/generated/binding.ts
