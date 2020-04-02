import { gql } from 'apollo-boost';

const GET_INCOME_PERCENTAGE_CHANGE = gql`
  query getIncomePercentageChange {
    getIncomeFigures {
      percentageDifference
    }
  }
`;

export default GET_INCOME_PERCENTAGE_CHANGE;
