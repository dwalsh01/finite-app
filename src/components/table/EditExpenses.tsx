import React from 'react';
import updateFieldChanged from './UpdateFieldChanged';
import { checkColor } from '../card/ExpenseCard';
import { GetExpenses_me_expenses } from '../../types/GetExpenses';
import { Updated } from './ExpensesTable';

interface EditExpensesProps {
  setExp: React.Dispatch<React.SetStateAction<GetExpenses_me_expenses[]>>;
  setUpdated: React.Dispatch<React.SetStateAction<Updated[]>>;
  index: number;
  exp: GetExpenses_me_expenses[];
  expense: GetExpenses_me_expenses;
}
const EditExpenses: React.FC<EditExpensesProps> = ({ expense, ...rest }) => (
  <>
    <td className="border px-4 py-2">
      <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="dateOfExpense">
        Date Of Expense
        <input
          className={`w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline
                          `}
          id="dateOfExpense"
          type="date"
          value={expense.dateOfExpense}
          onChange={updateFieldChanged({ ...rest })}
        />
      </label>
    </td>
    <td className="border px-4 py-2">
      <input
        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        value={expense.description}
        name="description"
        type="text"
        onChange={updateFieldChanged({ ...rest })}
      />
    </td>
    <td className="border px-2 text-center">
      <div className="relative">
        <select
          className={`block appearance-none w-full ${checkColor(
            expense.sectorOfExpense,
          )} border border-gray-200 text-gray-800 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
          id="sector"
          name="sectorOfExpense"
          value={expense.sectorOfExpense}
          onChange={updateFieldChanged({ ...rest })}
        >
          <option>Entertainment</option>
          <option>Health</option>
          <option>Food</option>
          <option>Education</option>
          <option>Fashion</option>
          <option>Beauty</option>
          <option>Miscellaneous</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </td>
    <td className="border px-4 py-2">
      <input
        className="px-3 py-2 mb-3 text-sm text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        value={+expense.amount}
        name="amount"
        type="number"
        onChange={updateFieldChanged({ ...rest })}
      />
    </td>
  </>
);

export default EditExpenses;
