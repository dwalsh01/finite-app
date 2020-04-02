import { gql } from 'apollo-boost';

const GET_THIS_MONTH_INCOME = gql`
  query GetThisMonthIncome {
    me {
      id
      currency
    }
    getIncomeFigures {
      totalThisMonth
    }
  }
`;

export default GET_THIS_MONTH_INCOME;
