import { SuperconnectorResolvers } from "@superconnectors/types";

export const Superconnector: SuperconnectorResolvers = {
  firstName({ firstName }) {
    return firstName;
  },
  lastName({ lastName }) {
    return lastName;
  },
  contestantId({ contestantId }) {
    return contestantId;
  },
};
