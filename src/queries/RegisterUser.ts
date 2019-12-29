import { gql } from 'apollo-boost';

const REGISTER_MUTATION = gql`
  mutation RegisterMutation($email: String!, $password: String!) {
    register(email: $email, password: $password) {
      registered
      user {
        id
        email
        expenses {
          id
          dateOfExpense
          sectorOfExpense
          description
          amount
        }
      }
    }
  }
`;

export default REGISTER_MUTATION;
