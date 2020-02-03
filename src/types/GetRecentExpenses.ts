/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetRecentExpenses
// ====================================================

export interface GetRecentExpenses_getRecentExpenses {
  __typename: "Expense";
  id: string;
  amount: number;
  dateOfExpense: string;
  sectorOfExpense: string;
}

export interface GetRecentExpenses {
  getRecentExpenses: GetRecentExpenses_getRecentExpenses[];
}

export interface GetRecentExpensesVariables {
  first: number;
}
