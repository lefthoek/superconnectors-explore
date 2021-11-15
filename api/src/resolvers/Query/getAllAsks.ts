import { QueryResolvers } from "@superconnectors/types";
import asks from "./asks.json";

const getAllAsks: QueryResolvers["getAllAsks"] = async () => {
  return asks;
};

export default getAllAsks;
