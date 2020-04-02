/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: LoginMutation
// ====================================================

export interface LoginMutation_login_user_income {
  __typename: "Income";
  id: string;
  date: string;
  sector: string;
  description: string;
  amount: number;
}

export interface LoginMutation_login_user_expenses {
  __typename: "Expense";
  amount: number;
  dateOfExpense: string;
  description: string;
  id: string;
  sectorOfExpense: string;
}

export interface LoginMutation_login_user {
  __typename: "User";
  id: string;
  email: string;
  name: string;
  income: LoginMutation_login_user_income[] | null;
  expenses: LoginMutation_login_user_expenses[] | null;
  currency: string;
}

export interface LoginMutation_login {
  __typename: "LoginResult";
  user: LoginMutation_login_user | null;
  error: string;
  reason: string;
}

export interface LoginMutation {
  login: LoginMutation_login | null;
}

export interface LoginMutationVariables {
  email: string;
  password: string;
}
