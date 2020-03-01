import { gql } from 'apollo-boost';

const GET_TOTAL_FOR_MONTH = gql`
  query GetTotalExpensesForMonth {
    getTotalForMonth
    me {
      id
      currency
    }
  }
`;

export default GET_TOTAL_FOR_MONTH;
