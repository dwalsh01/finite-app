import { gql } from 'apollo-boost';

const GET_PERCENTAGE_CHANGE = gql`
  query GetPercentageChange {
    getPercentageChange
  }
`;

export default GET_PERCENTAGE_CHANGE;
