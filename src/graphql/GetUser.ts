import { gql } from 'apollo-boost';

const ME_QUERY = gql`
  query MeQuery {
    me {
      id
      email
      name
      currency
    }
  }
`;

export default ME_QUERY;
