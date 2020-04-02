import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { GetExpenses_me_expenses, GetExpenses } from '../../types/GetExpenses';
import formatDate from '../../utils/formatDate';
import { checkColor } from '../card/ExpenseCard';
import EditExpenses from './EditExpenses';
import SaveButton from './SaveButton';
import { UpdateExpenses, UpdateExpensesVariables } from '../../types/UpdateExpenses';
import UPDATE_EXPENSES from '../../graphql/UpdateExpense';
import GET_ALL_EXPENSES from '../../graphql/GetAllExpenses';

const TableHead: React.FC = () => (
  <thead>
    <tr className="text-lg text-gray-800">
      <th className="px-4 py-2">Date</th>
      <th className="px-4 py-2">Description</th>
      <th className="px-4 py-2">Sector</th>
      <th className="px-4 py-2">Amount</th>
    </tr>
  </thead>
);
interface ExpensesTableProps {
  expenses: GetExpenses_me_expenses[];
}
export interface Updated {
  __typename: 'Expense';
  id: string;
  dateOfExpense: string;
  sectorOfExpense: string;
  description: string;
  amount: string;
}
const ExpensesTable: React.FC<ExpensesTableProps> = ({ expenses }) => {
  // eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
  const [edit, setEdit] = React.useState(false);
  const [exp, setExp] = React.useState(expenses);
  const [updated, setUpdated] = React.useState<Updated[]>([]);
  const [mutate, { data }] = useMutation<UpdateExpenses, UpdateExpensesVariables>(UPDATE_EXPENSES, {
    update(cache) {
      const result = cache.readQuery<GetExpenses>({ query: GET_ALL_EXPENSES });
      if (result?.me?.expenses) {
        const { expenses: currExp } = result.me;
        const currentExpenses = [...currExp];
        updated.forEach(update => {
          const { amount, ...rest } = update;
          for (let ind = 0; ind < currentExpenses.length; ind++) {
            if (update.id === currentExpenses[ind].id) {
              currentExpenses[ind] = { amount: parseFloat(amount), ...rest };
              break;
            }
          }
        });
        cache.writeQuery<GetExpenses>({
          query: GET_ALL_EXPENSES,
          data: {
            me: {
              // eslint-disable-next-line no-underscore-dangle
              __typename: result.me.__typename,
              id: result.me.id,
              expenses: currentExpenses,
            },
          },
        });
      }
    },
  });
  return (
    <>
      {data?.updateExpenses && (
        <div className="block p-3 text-center text-green-400 text-lg font-semibold">
          Successfully updated Expense!
        </div>
      )}
      {edit ? (
        <SaveButton setEdit={setEdit} edit={edit} updated={updated} mutate={mutate} />
      ) : (
        <button
          type="button"
          className="px-4 py-2 m-2 rounded-lg  bg-red-400"
          onClick={() => setEdit(!edit)}
        >
          Edit
        </button>
      )}
      <table className="w-full bg-white rounded-lg">
        <TableHead />
        <tbody>
          <>
            {exp.map((expense, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <tr key={index} className="text-gray-800">
                {edit ? (
                  <EditExpenses
                    setExp={setExp}
                    setUpdated={setUpdated}
                    index={index}
                    exp={exp}
                    expense={expense}
                  />
                ) : (
                  <>
                    <td className="border px-4 py-2">{formatDate(expense.dateOfExpense)}</td>
                    <td className="border px-4 py-2">{expense.description}</td>
                    <td className="border px-2 text-center">
                      <div className={`p-1 ${checkColor(expense.sectorOfExpense)} rounded-lg`}>
                        {expense.sectorOfExpense}
                      </div>
                    </td>
                    <td className="border px-4 py-2">{`€${expense.amount}`}</td>
                  </>
                )}
              </tr>
            ))}
          </>
        </tbody>
      </table>
    </>
  );
};

export default ExpensesTable;
