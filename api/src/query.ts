import { ApolloServer } from "apollo-server-lambda";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import resolvers from "./resolvers";
import typeDefs from "@superconnectors/graphql-schema";
import context from "./context";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
  introspection: true,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

const query = server.createHandler({
  expressGetMiddlewareOptions: {
    cors: {
      origin: "*",
      credentials: true,
    },
  },
});

export default query;
