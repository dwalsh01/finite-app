/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetIncomeAmountChange
// ====================================================

export interface GetIncomeAmountChange_me {
  __typename: "User";
  id: string;
  currency: string;
}

export interface GetIncomeAmountChange_getIncomeFigures {
  __typename: "IncomeFigures";
  amountDifference: number;
}

export interface GetIncomeAmountChange {
  me: GetIncomeAmountChange_me | null;
  getIncomeFigures: GetIncomeAmountChange_getIncomeFigures;
}
