import { gql } from 'apollo-boost';

const GET_LAST_MONTH_EXPENSES = gql`
  query GetExpensesLastMonth {
    getExpenses {
      expensesLastMonth {
        id
        dateOfExpense
        sectorOfExpense
        description
        amount
      }
    }
  }
`;

export default GET_LAST_MONTH_EXPENSES;
