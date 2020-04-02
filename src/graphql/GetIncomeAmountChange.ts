import { gql } from 'apollo-boost';

const GET_INCOME_AMOUNT_CHANGE = gql`
  query GetIncomeAmountChange {
    me {
      id
      currency
    }
    getIncomeFigures {
      amountDifference
    }
  }
`;

export default GET_INCOME_AMOUNT_CHANGE;
