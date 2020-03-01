/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetTotalExpensesForMonth
// ====================================================

export interface GetTotalExpensesForMonth_me {
  __typename: "User";
  currency: string;
}

export interface GetTotalExpensesForMonth {
  getTotalForMonth: number;
  me: GetTotalExpensesForMonth_me | null;
}
