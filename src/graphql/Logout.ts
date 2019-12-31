import { gql } from 'apollo-boost';

const LOGOUT = gql`
  mutation LogoutMutation {
    logout
  }
`;

export default LOGOUT;
