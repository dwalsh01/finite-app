import { gql } from 'apollo-boost';

const REGISTER_MUTATION = gql`
  mutation RegisterMutation(
    $email: String!
    $password: String!
    $name: String!
    $currency: String!
  ) {
    register(email: $email, password: $password, name: $name, currency: $currency) {
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
