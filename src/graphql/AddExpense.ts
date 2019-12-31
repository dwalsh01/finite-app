import { gql } from 'apollo-boost';

const ADD_EXPENSE_MUTATION = gql`
  mutation AddExpenseMutation(
    $dateOfExpense: String
    $sectorOfExpense: String
    $description: String
    $amount: Float
  ) {
    addExpense(
      dateOfExpense: $dateOfExpense
      sectorOfExpense: $sectorOfExpense
      description: $description
      amount: $amount
    )
  }
`;
export default ADD_EXPENSE_MUTATION;
