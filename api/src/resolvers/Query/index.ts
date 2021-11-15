import { QueryResolvers } from "@superconnectors/types";
import getAllSuperconnectors from "./getAllSuperconnectors";
import getAllAsks from "./getAllAsks";
import getGameData from "./getGameData";

const Query: QueryResolvers = {
  getAllSuperconnectors,
  getAllAsks,
  getGameData,
};

export default Query;
