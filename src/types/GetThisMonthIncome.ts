/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetThisMonthIncome
// ====================================================

export interface GetThisMonthIncome_me {
  __typename: "User";
  id: string;
  currency: string;
}

export interface GetThisMonthIncome_getIncomeFigures {
  __typename: "IncomeFigures";
  totalThisMonth: number;
}

export interface GetThisMonthIncome {
  me: GetThisMonthIncome_me | null;
  getIncomeFigures: GetThisMonthIncome_getIncomeFigures;
}
