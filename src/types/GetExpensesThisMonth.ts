/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetExpensesThisMonth
// ====================================================

export interface GetExpensesThisMonth_getExpenses_expensesThisMonth {
  __typename: "Expense";
  dateOfExpense: string;
  sectorOfExpense: string;
  description: string;
  amount: number;
}

export interface GetExpensesThisMonth_getExpenses {
  __typename: "GetExpenses";
  daysOfMonth: any[];
  expensesThisMonth: GetExpensesThisMonth_getExpenses_expensesThisMonth[];
}

export interface GetExpensesThisMonth {
  getExpenses: GetExpensesThisMonth_getExpenses | null;
}
