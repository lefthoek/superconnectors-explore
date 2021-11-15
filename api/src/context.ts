import { ApolloContext } from "@superconnectors/types";

const apolloContext: (args: { event: any; context: any }) => ApolloContext = ({
  event,
  context,
}) => {
  return {
    rawEvent: event,
    functionContext: context,
  };
};

export default apolloContext;
