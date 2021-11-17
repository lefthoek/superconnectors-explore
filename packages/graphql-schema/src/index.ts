import "graphql-import-node";
import * as Schema from "./Schema.graphql";
import * as Mutation from "./Mutation.graphql";
import * as Subscription from "./Subscription.graphql";
import * as Query from "./Query.graphql";
import * as Scalars from "./Scalars.graphql";
import * as Superconnector from "./Superconnector.graphql";
import * as Ask from "./Ask.graphql";

const typeDefs = [
  Schema,
  Query,
  Mutation,
  Subscription,
  Scalars,
  Superconnector,
  Ask,
];

export default typeDefs;
