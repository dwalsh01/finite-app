import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import GET_THIS_MONTH_EXPENSES from '../../graphql/ExpensesThisMonth';
import { GetExpensesThisMonth } from '../../types/GetExpensesThisMonth';
import sortExpenses, { sortDates, totalForTheMonth } from '../../utils/sortExpenses';

const AmountThisMonth: React.FC = () => {
  const { data, loading } = useQuery<GetExpensesThisMonth>(GET_THIS_MONTH_EXPENSES);
  if (loading || !data) {
    return null;
  }
  if (data?.getExpenses?.expensesThisMonth) {
    console.log('SortExpenses(): ', sortExpenses(data.getExpenses.expensesThisMonth));
    console.log('sortDates(): ', sortDates(data?.getExpenses.expensesThisMonth));
    console.log('totalForTheMonth(): ', totalForTheMonth(data?.getExpenses.expensesThisMonth));
  }
  if (!data?.getExpenses) {
    return <div>No expenses this month</div>;
  }
  return <span>{`$${totalForTheMonth(data.getExpenses.expensesThisMonth).amount}`}</span>;
};

export default AmountThisMonth;
