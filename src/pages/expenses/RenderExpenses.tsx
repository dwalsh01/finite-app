import React from 'react';
import { GetExpenses_me_expenses } from '../../types/GetExpenses';
import { sortExpensesByDate } from '../../utils/sortExpenses';
import isToday from '../../utils/isToday';
import ExpenseCard from '../../components/card/ExpenseCard';

interface RenderExpensesProps {
  today: boolean;
  expenses: GetExpenses_me_expenses[];
}
const RenderExpenses: React.FC<RenderExpensesProps> = ({ today, expenses }) => (
  <>
    {/* eslint-disable-next-line react/no-unescaped-entities */}
    {today && <h1 className="text-xl font-bold text-center pt-2">Today's Expenses</h1>}
    <div className="flex flex-wrap justify-center px-5 md:px-0">
      {sortExpensesByDate({ expenses, nearest: true })
        .filter(exp => isToday(exp.dateOfExpense))
        .map(expense => (
          <ExpenseCard key={expense.id} {...expense} />
        ))}
    </div>
    <>
      <h1 className="text-xl font-bold text-center">All Expenses</h1>
      <div className="flex flex-wrap justify-center px-5 md:px-0">
        <>
          {sortExpensesByDate({ expenses, nearest: true }).map(expense => (
            <ExpenseCard key={expense.id} {...expense} />
          ))}
        </>
      </div>
    </>
  </>
);

export default RenderExpenses;
