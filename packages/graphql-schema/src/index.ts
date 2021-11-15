import "graphql-import-node";
import * as Schema from "./Schema.graphql";
import * as Query from "./Query.graphql";
import * as Scalars from "./Scalars.graphql";
import * as Superconnector from "./Superconnector.graphql";
import * as Ask from "./Ask.graphql";

const typeDefs = [Schema, Query, Scalars, Superconnector, Ask];

export default typeDefs;
