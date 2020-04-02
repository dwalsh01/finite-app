import React from 'react';
import { GetExpenses_me_expenses } from '../../types/GetExpenses';
import ExpensesTable from './ExpensesTable';
import RenderExpenses from '../../pages/expenses/RenderExpenses';
import { DateType } from './DatePicker';
import { sortExpensesByDate } from '../../utils/sortExpenses';

const RenderOnType = (
  exp: GetExpenses_me_expenses[],
  expenseType: string,
  today: boolean,
  selectedSector: string | null,
  filteredDates: DateType,
) => {
  // TODO: filter expenses here
  const filterCheck = (expense: GetExpenses_me_expenses) => {
    if (filteredDates.startDate.getTime() === filteredDates.endDate.getTime())
      return selectedSector === null ? true : selectedSector === expense.sectorOfExpense;
    const doe = new Date(expense.dateOfExpense);
    return doe.getTime() <= filteredDates.endDate.getTime() &&
      doe.getTime() >= filteredDates.startDate.getTime() &&
      selectedSector === null
      ? true
      : selectedSector === expense.sectorOfExpense;
  };
  const filteredExp = exp.filter(expense => filterCheck(expense));
  if (expenseType === 'Table') {
    return (
      <ExpensesTable expenses={sortExpensesByDate({ expenses: filteredExp, nearest: true })} />
    );
  }
  return (
    <RenderExpenses
      today={today}
      expenses={sortExpensesByDate({ expenses: filteredExp, nearest: true })}
    />
  );
};

export default RenderOnType;
