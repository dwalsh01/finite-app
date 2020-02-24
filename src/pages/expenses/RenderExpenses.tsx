import React from 'react';
import { GetExpenses_me_expenses } from '../../types/GetExpenses';
import { sortExpensesByDate } from '../../utils/sortExpenses';
import isToday from '../../utils/isToday';
import ExpenseCard from '../../components/card/ExpenseCard';

interface RenderExpensesProps {
  today: boolean;
  selectedSector: string | null;
  expenses: GetExpenses_me_expenses[];
}
const RenderExpenses: React.FC<RenderExpensesProps> = ({ today, selectedSector, expenses }) => (
  <>
    {today && <h1 className="text-xl font-bold text-center pt-2">Todays Expenses</h1>}
    <div className="flex flex-wrap justify-center px-5 md:px-0">
      {selectedSector && expenses ? (
        <>
          {sortExpensesByDate({ expenses, nearest: true })
            .filter(exp => exp.sectorOfExpense === selectedSector && isToday(exp.dateOfExpense))
            .map(expense => (
              <ExpenseCard key={expense.id} {...expense} />
            ))}
        </>
      ) : (
        <>
          {sortExpensesByDate({ expenses, nearest: true })
            .filter(exp => isToday(exp.dateOfExpense))
            .map(expense => (
              <ExpenseCard key={expense.id} {...expense} />
            ))}
        </>
      )}
    </div>
    <>
      <h1 className="text-xl font-bold text-center">All Expenses</h1>
      <div className="flex flex-wrap justify-center px-5 md:px-0">
        {selectedSector && expenses ? (
          <>
            {sortExpensesByDate({ expenses, nearest: true })
              .filter(exp => exp.sectorOfExpense === selectedSector)
              .map(expense => (
                <ExpenseCard key={expense.id} {...expense} />
              ))}
          </>
        ) : (
          <>
            {sortExpensesByDate({ expenses, nearest: true }).map(
              (expense: GetExpenses_me_expenses) => (
                <ExpenseCard key={expense.id} {...expense} />
              ),
            )}
          </>
        )}
      </div>
    </>
  </>
);

export default RenderExpenses;
