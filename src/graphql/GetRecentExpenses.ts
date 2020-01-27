import { gql } from 'apollo-boost';

const GET_RECENT_EXPENSES = gql`
  query GetRecentExpenses($first: Int!) {
    getRecentExpenses(first: $first) {
      id
      amount
      dateOfExpense
      sectorOfExpense
    }
  }
`;

export default GET_RECENT_EXPENSES;
