import { gql } from 'apollo-boost';

const GET_INCOME_AND_EXPENSE_FOR_MONTH = gql`
  query GetIncomeAndExpenseForMonth {
    getTotalIncomeForMonth
    getTotalForMonth
  }
`;

export default GET_INCOME_AND_EXPENSE_FOR_MONTH;
