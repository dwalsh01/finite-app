/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MeQuery
// ====================================================

export interface MeQuery_me {
  __typename: "User";
  id: string;
  email: string;
  name: string;
  currency: string;
}

export interface MeQuery {
  me: MeQuery_me | null;
}
