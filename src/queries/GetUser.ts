import { gql } from 'apollo-boost';

const ME_QUERY = gql`
  query MeQuery {
    me {
      id
      email
    }
  }
`;

export default ME_QUERY;
