import { gql } from 'apollo-boost';

const GET_AMOUNT_CHANGE = gql`
  query GetAmountChange {
    getAmountChange
    me {
      id
      currency
    }
  }
`;

export default GET_AMOUNT_CHANGE;
