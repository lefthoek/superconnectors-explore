import { makeExecutableSchema } from "@graphql-tools/schema";
import { createInstance, prepareResolvers, subscribe } from "subscriptionless";
import gql from "graphql-tag";

export const typeDefs = gql`
  schema {
    query: Query
    subscription: Subscription
  }

  type Message {
    text: String!
  }

  type Query {
    gameData: Message!
  }

  type Subscription {
    gameData: Message!
  }
`;

const resolvers = prepareResolvers({
  Query: {
    gameData: () => ({ text: "HELLO" }),
  },
  Subscription: {
    gameData: {
      resolve: () => ({ text: "HELLO" }),
      subscribe: subscribe("NEW_DATA"),
      onSubscribe: () => {
        console.log("SUBSCRIBED");
      },
    },
  },
});

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const instance = createInstance({
  schema,
  tableNames: {
    connections: process.env.CONNECTIONS_TABLE,
    subscriptions: process.env.SUBSCRIPTIONS_TABLE,
  },
  onConnect: () => console.log("CONNECTED", schema),
  onError: (e) => console.error("ERROR", e),
});

export default instance.gatewayHandler;
