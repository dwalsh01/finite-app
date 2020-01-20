/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetExpensesLastMonth
// ====================================================

export interface GetExpensesLastMonth_getExpenses_expensesLastMonth {
  __typename: "Expense";
  id: string;
  dateOfExpense: string;
  sectorOfExpense: string;
  description: string;
  amount: number;
}

export interface GetExpensesLastMonth_getExpenses {
  __typename: "GetExpenses";
  expensesLastMonth: GetExpensesLastMonth_getExpenses_expensesLastMonth[];
}

export interface GetExpensesLastMonth {
  getExpenses: GetExpensesLastMonth_getExpenses | null;
}
