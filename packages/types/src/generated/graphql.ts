import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { ApolloContext } from '../index';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  EmailAddress: string;
  GUID: any;
  JSON: string;
  URL: any;
};

export type Ask = BaseAsk & {
  points: Scalars['Int'];
  summary: Scalars['String'];
  team: Scalars['String'];
};

export type BaseAsk = {
  points: Scalars['Int'];
  summary: Scalars['String'];
  team: Scalars['String'];
};

export type GameAsk = BaseAsk & {
  points: Scalars['Int'];
  resolved: Scalars['Boolean'];
  summary: Scalars['String'];
  superconnectors: Array<Maybe<Superconnector>>;
  team: Scalars['String'];
};

export type Query = {
  getAllAsks: Maybe<Array<Maybe<Ask>>>;
  getAllSuperconnectors: Maybe<Array<Maybe<Superconnector>>>;
  getGameData: Maybe<Array<Maybe<GameAsk>>>;
};

export type Superconnector = {
  contestantId: Scalars['Int'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Ask: ResolverTypeWrapper<Ask>;
  BaseAsk: ResolversTypes['Ask'] | ResolversTypes['GameAsk'];
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  EmailAddress: ResolverTypeWrapper<Scalars['EmailAddress']>;
  GUID: ResolverTypeWrapper<Scalars['GUID']>;
  GameAsk: ResolverTypeWrapper<GameAsk>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Superconnector: ResolverTypeWrapper<Superconnector>;
  URL: ResolverTypeWrapper<Scalars['URL']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Ask: Ask;
  BaseAsk: ResolversParentTypes['Ask'] | ResolversParentTypes['GameAsk'];
  Boolean: Scalars['Boolean'];
  EmailAddress: Scalars['EmailAddress'];
  GUID: Scalars['GUID'];
  GameAsk: GameAsk;
  Int: Scalars['Int'];
  JSON: Scalars['JSON'];
  Query: {};
  String: Scalars['String'];
  Superconnector: Superconnector;
  URL: Scalars['URL'];
}>;

export type AskResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['Ask'] = ResolversParentTypes['Ask']> = ResolversObject<{
  points: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  summary: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  team: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BaseAskResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['BaseAsk'] = ResolversParentTypes['BaseAsk']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Ask' | 'GameAsk', ParentType, ContextType>;
  points: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  summary: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  team: Resolver<ResolversTypes['String'], ParentType, ContextType>;
}>;

export interface EmailAddressScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['EmailAddress'], any> {
  name: 'EmailAddress';
}

export interface GuidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['GUID'], any> {
  name: 'GUID';
}

export type GameAskResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['GameAsk'] = ResolversParentTypes['GameAsk']> = ResolversObject<{
  points: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  resolved: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  summary: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  superconnectors: Resolver<Array<Maybe<ResolversTypes['Superconnector']>>, ParentType, ContextType>;
  team: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type QueryResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  getAllAsks: Resolver<Maybe<Array<Maybe<ResolversTypes['Ask']>>>, ParentType, ContextType>;
  getAllSuperconnectors: Resolver<Maybe<Array<Maybe<ResolversTypes['Superconnector']>>>, ParentType, ContextType>;
  getGameData: Resolver<Maybe<Array<Maybe<ResolversTypes['GameAsk']>>>, ParentType, ContextType>;
}>;

export type SuperconnectorResolvers<ContextType = ApolloContext, ParentType extends ResolversParentTypes['Superconnector'] = ResolversParentTypes['Superconnector']> = ResolversObject<{
  contestantId: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  firstName: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface UrlScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['URL'], any> {
  name: 'URL';
}

export type Resolvers<ContextType = ApolloContext> = ResolversObject<{
  Ask: AskResolvers<ContextType>;
  BaseAsk: BaseAskResolvers<ContextType>;
  EmailAddress: GraphQLScalarType;
  GUID: GraphQLScalarType;
  GameAsk: GameAskResolvers<ContextType>;
  JSON: GraphQLScalarType;
  Query: QueryResolvers<ContextType>;
  Superconnector: SuperconnectorResolvers<ContextType>;
  URL: GraphQLScalarType;
}>;

