import { gql } from 'apollo-boost';

const ADD_INCOME_MUTATION = gql`
  mutation AddIncomeMutation($date: String, $sector: String, $description: String, $amount: Float) {
    addIncome(date: $date, sector: $sector, description: $description, amount: $amount)
  }
`;

export default ADD_INCOME_MUTATION;
