export * from "./models";
export * from "./resolvers";

export interface ApolloContext {
  rawEvent: { headers: { origin: string } };
  functionContext: { functionName: string };
}
