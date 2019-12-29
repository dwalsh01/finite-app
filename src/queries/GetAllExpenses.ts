import { gql } from 'apollo-boost';

const GET_ALL_EXPENSES = gql`
  query GetExpenses {
    me {
      id
      expenses {
        dateOfExpense
        sectorOfExpense
        description
        amount
      }
    }
  }
`;

export default GET_ALL_EXPENSES;
