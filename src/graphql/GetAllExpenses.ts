import { gql } from 'apollo-boost';

const GET_ALL_EXPENSES = gql`
  query GetExpenses {
    me {
      id
      expenses {
        id
        dateOfExpense
        sectorOfExpense
        description
        amount
      }
    }
  }
`;

export default GET_ALL_EXPENSES;
