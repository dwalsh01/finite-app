import { gql } from 'apollo-boost';

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        id
        email
        name
        income {
          id
          date
          sector
          description
          amount
        }
        expenses {
          amount
          dateOfExpense
          description
          id
          sectorOfExpense
        }
        currency
      }
      error
      reason
    }
  }
`;

export default LOGIN_MUTATION;
