import { makeExecutableSchema } from "@graphql-tools/schema";

// Resolvers
import resolvers from "./resolvers";

// Type Definitions
import typeDefs from "./typeDefs";

const schema = makeExecutableSchema({
  resolvers,
  typeDefs,
});

export default schema;
