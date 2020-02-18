import { gql } from 'apollo-boost';

const REGISTER_MUTATION = gql`
  mutation RegisterMutation($email: String!, $password: String!, $name: String!) {
    register(email: $email, password: $password, name: $name) {
      registered
      user {
        id
        email
        name
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
