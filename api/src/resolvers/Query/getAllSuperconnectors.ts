import { QueryResolvers } from "@superconnectors/types";
import superconnectors from "./superconnectors.json";

const getAllBadges: QueryResolvers["getAllSuperconnectors"] = async () => {
  return superconnectors.map(({ contestant_id, last_name, first_name }) => {
    return {
      contestantId: contestant_id,
      lastName: last_name,
      firstName: first_name,
    };
  });
};

export default getAllBadges;
