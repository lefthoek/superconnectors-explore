import { QueryResolvers } from "@superconnectors/types";
import pilotData from "./pilotData.json";

const getGameData: QueryResolvers["getGameData"] = async () => {
  return pilotData.map(({ superconnectors, ...rest }) => {
    const sc = superconnectors.map(
      ({ contestant_id, last_name, first_name }) => {
        return {
          contestantId: contestant_id,
          lastName: last_name,
          firstName: first_name,
        };
      }
    );

    return { ...rest, superconnectors: sc };
  });
};

export default getGameData;
