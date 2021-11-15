import { Resolvers } from "@superconnectors/types";
import Query from "./Query";
import * as Scalars from "./Scalars";
import * as Superconnector from "./Superconnector";
import * as Ask from "./Ask";

const resolvers: Resolvers = {
  Query,
  ...Scalars,
  ...Superconnector,
  ...Ask,
};

export default resolvers;
