import { gql } from 'apollo-boost';

const UPDATE_EXPENSES = gql`
  mutation UpdateExpenses($updatedExpenses: [UpdateExpense!]!) {
    updateExpenses(updatedExpenses: $updatedExpenses)
  }
`;

export default UPDATE_EXPENSES;
