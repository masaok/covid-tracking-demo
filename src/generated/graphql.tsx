import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  JSONObject: any;
  Date: any;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type CovidResource = {
   __typename?: 'CovidResource';
  state: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  images?: Maybe<Array<Maybe<Image>>>;
  name?: Maybe<Scalars['String']>;
  pui?: Maybe<Scalars['String']>;
  pum?: Maybe<Scalars['Boolean']>;
  notes?: Maybe<Scalars['String']>;
  tracker?: Maybe<Tracker>;
  total?: Maybe<CovidStat>;
  daily?: Maybe<Array<Maybe<CovidStat>>>;
};

export type CovidStat = {
   __typename?: 'CovidStat';
  state: Scalars['String'];
  positive?: Maybe<Scalars['Int']>;
  negative?: Maybe<Scalars['Int']>;
  pending?: Maybe<Scalars['Int']>;
  death?: Maybe<Scalars['Int']>;
  dateModified?: Maybe<Scalars['Date']>;
  dateChecked?: Maybe<Scalars['Date']>;
};

export type DataPoint = {
  positives?: Maybe<Scalars['Int']>;
  negatives?: Maybe<Scalars['Int']>;
  positivesPlusNegatives?: Maybe<Scalars['Int']>;
  pending?: Maybe<Scalars['Int']>;
  deaths?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
};


export type Headers = {
   __typename?: 'Headers';
  Cookie?: Maybe<Scalars['String']>;
};

export type HealthDepartment = {
   __typename?: 'HealthDepartment';
  url?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
};

export type Image = {
   __typename?: 'Image';
  url?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
};


export type Query = {
   __typename?: 'Query';
  state?: Maybe<State>;
  states: Array<Maybe<State>>;
  usCumulativeTotal?: Maybe<UsTotalDataPoint>;
  usDailyData?: Maybe<Array<Maybe<UsDailyDataPoint>>>;
};


export type QueryStateArgs = {
  id: Scalars['ID'];
};


export type QueryStatesArgs = {
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type State = {
   __typename?: 'State';
  id: Scalars['String'];
  name: Scalars['String'];
  covidResource?: Maybe<CovidResource>;
  healthDepartment?: Maybe<HealthDepartment>;
};

export type Tracker = {
   __typename?: 'Tracker';
  url?: Maybe<Scalars['String']>;
  kind?: Maybe<Scalars['String']>;
  filter?: Maybe<Scalars['String']>;
  headers?: Maybe<Scalars['JSONObject']>;
  navigate?: Maybe<Scalars['String']>;
  options?: Maybe<Scalars['JSONObject']>;
  ssl_no_verify?: Maybe<Scalars['Boolean']>;
};

export type UsDailyDataPoint = DataPoint & {
   __typename?: 'USDailyDataPoint';
  date?: Maybe<Scalars['Date']>;
  statesReporting?: Maybe<Scalars['Int']>;
  positives?: Maybe<Scalars['Int']>;
  negatives?: Maybe<Scalars['Int']>;
  positivesPlusNegatives?: Maybe<Scalars['Int']>;
  pending?: Maybe<Scalars['Int']>;
  deaths?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
};

export type UsTotalDataPoint = DataPoint & {
   __typename?: 'USTotalDataPoint';
  positives?: Maybe<Scalars['Int']>;
  negatives?: Maybe<Scalars['Int']>;
  positivesPlusNegatives?: Maybe<Scalars['Int']>;
  pending?: Maybe<Scalars['Int']>;
  deaths?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
};

export type StateNamesQueryVariables = {};


export type StateNamesQuery = (
  { __typename?: 'Query' }
  & { states: Array<Maybe<(
    { __typename?: 'State' }
    & Pick<State, 'name'>
  )>> }
);


export const StateNamesDocument = gql`
    query StateNames {
  states(ids: ["CA"]) {
    name
  }
}
    `;
export type StateNamesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<StateNamesQuery, StateNamesQueryVariables>, 'query'>;

    export const StateNamesComponent = (props: StateNamesComponentProps) => (
      <ApolloReactComponents.Query<StateNamesQuery, StateNamesQueryVariables> query={StateNamesDocument} {...props} />
    );
    
export type StateNamesProps<TChildProps = {}> = ApolloReactHoc.DataProps<StateNamesQuery, StateNamesQueryVariables> & TChildProps;
export function withStateNames<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  StateNamesQuery,
  StateNamesQueryVariables,
  StateNamesProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, StateNamesQuery, StateNamesQueryVariables, StateNamesProps<TChildProps>>(StateNamesDocument, {
      alias: 'stateNames',
      ...operationOptions
    });
};
export type StateNamesQueryResult = ApolloReactCommon.QueryResult<StateNamesQuery, StateNamesQueryVariables>;