import {
  AskResolvers,
  BaseAskResolvers,
  GameAskResolvers,
} from "@superconnectors/types";

export const BaseAsk: BaseAskResolvers = {
  __resolveType(ask) {
    return ask.hasOwnProperty("resolved") !== undefined ? "GameAsk" : "Ask";
  },
  team({ team }) {
    return team;
  },
  summary({ summary }) {
    return summary;
  },
  points({ points }) {
    return points;
  },
};
export const Ask: AskResolvers = {
  ...BaseAsk,
};

export const GameAsk: GameAskResolvers = {
  ...BaseAsk,
  resolved({ resolved }) {
    return resolved;
  },
  superconnectors({ superconnectors }) {
    return superconnectors;
  },
};
