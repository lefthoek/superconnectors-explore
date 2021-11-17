import { Resolvers } from "@superconnectors/types";
import Query from "./Query";
import * as Superconnector from "./Superconnector";
import * as Ask from "./Ask";

const base: Omit<Resolvers, "mutation" | "subscription"> = {
  Query,
  ...Superconnector,
  ...Ask,
};

export default base;
