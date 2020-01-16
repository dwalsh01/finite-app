import { gql } from 'apollo-boost';

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        id
        email
      }
      error
      reason
    }
  }
`;

export default LOGIN_MUTATION;
