import React from 'react';
import { GetExpenses_me_expenses } from '../../types/GetExpenses';
import formatDate from '../../utils/formatDate';
import { checkColor } from '../card/ExpenseCard';
import { sortExpensesByDate } from '../../utils/sortExpenses';

interface ExpensesTableProps {
  expenses: GetExpenses_me_expenses[];
  selectedSector: string | null;
}
const ExpensesTable: React.FC<ExpensesTableProps> = ({ expenses, selectedSector }) => (
  <table className="w-full bg-white rounded-lg">
    <thead>
      <tr className="text-lg text-gray-800">
        <th className="px-4 py-2">Date</th>
        <th className="px-4 py-2">Description</th>
        <th className="px-4 py-2">Sector</th>

        <th className="px-4 py-2">Amount</th>
      </tr>
    </thead>
    <tbody>
      {selectedSector ? (
        <>
          {sortExpensesByDate({
            expenses: expenses.filter(exp => exp.sectorOfExpense === selectedSector),
            nearest: true,
          }).map(expense => (
            <tr key={expense.id} className="text-gray-800">
              <td className="border px-4 py-2">{formatDate(expense.dateOfExpense)}</td>
              <td className="border px-4 py-2">{expense.description}</td>
              <td className="border px-2 text-center">
                <div className={`p-1 ${checkColor(expense.sectorOfExpense)} rounded-lg`}>
                  {expense.sectorOfExpense}
                </div>
              </td>
              <td className="border px-4 py-2">{`€${expense.amount}`}</td>
            </tr>
          ))}
        </>
      ) : (
        <>
          {sortExpensesByDate({ expenses, nearest: true }).map(expense => (
            <tr key={expense.id} className="text-gray-800">
              <td className="border px-4 py-2">{formatDate(expense.dateOfExpense)}</td>
              <td className="border px-4 py-2">{expense.description}</td>
              <td className="border px-2 text-center">
                <div className={`p-1 ${checkColor(expense.sectorOfExpense)} rounded-lg`}>
                  {expense.sectorOfExpense}
                </div>
              </td>
              <td className="border px-4 py-2">{`€${expense.amount}`}</td>
            </tr>
          ))}
        </>
      )}
    </tbody>
  </table>
);

export default ExpensesTable;
