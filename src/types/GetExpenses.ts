/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetExpenses
// ====================================================

export interface GetExpenses_me_expenses {
  __typename: "Expense";
  id: string;
  dateOfExpense: string;
  sectorOfExpense: string;
  description: string;
  amount: number;
}

export interface GetExpenses_me {
  __typename: "User";
  id: string;
  expenses: GetExpenses_me_expenses[] | null;
}

export interface GetExpenses {
  me: GetExpenses_me | null;
}
