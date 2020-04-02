/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAmountChange
// ====================================================

export interface GetAmountChange_me {
  __typename: "User";
  id: string;
  currency: string;
}

export interface GetAmountChange {
  getAmountChange: number;
  me: GetAmountChange_me | null;
}
