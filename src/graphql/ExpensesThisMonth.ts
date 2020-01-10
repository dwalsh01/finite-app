import { gql } from 'apollo-boost';

const GET_THIS_MONTH_EXPENSES = gql`
  query GetExpensesThisMonth {
    getExpenses {
      daysOfMonth
      expensesThisMonth {
        id
        dateOfExpense
        sectorOfExpense
        description
        amount
      }
    }
  }
`;

export default GET_THIS_MONTH_EXPENSES;
