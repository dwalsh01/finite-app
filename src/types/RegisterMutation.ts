/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RegisterMutation
// ====================================================

export interface RegisterMutation_register_user_expenses {
  __typename: "Expense";
  id: string;
  dateOfExpense: string;
  sectorOfExpense: string;
  description: string;
  amount: number;
}

export interface RegisterMutation_register_user {
  __typename: "User";
  id: string;
  email: string;
  name: string;
  expenses: RegisterMutation_register_user_expenses[] | null;
}

export interface RegisterMutation_register {
  __typename: "Register";
  registered: boolean;
  user: RegisterMutation_register_user | null;
}

export interface RegisterMutation {
  register: RegisterMutation_register;
}

export interface RegisterMutationVariables {
  email: string;
  password: string;
  name: string;
}
