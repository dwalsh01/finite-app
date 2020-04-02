import React from 'react';
import { GetExpenses_me_expenses } from '../../types/GetExpenses';
import { Updated } from './ExpensesTable';

interface UpdateFieldProps {
  setExp: React.Dispatch<React.SetStateAction<GetExpenses_me_expenses[]>>;
  setUpdated: React.Dispatch<React.SetStateAction<Updated[]>>;
  index: number;
  exp: GetExpenses_me_expenses[];
}
const updateFieldChanged = ({ setExp, index, setUpdated, exp }: UpdateFieldProps) => (
  e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>,
) => {
  const expenses = [...exp];
  // eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/no-explicit-any
  (expenses as any)[index] = { ...expenses[index], [e.target.name]: e.target.value };
  const updatedExpense = expenses[index];
  setUpdated(prev => {
    const currentUpdated = [...prev];
    let present = false;
    currentUpdated.forEach((updateExp, ind) => {
      if (updateExp.id === updatedExpense.id) {
        const { amount, ...rest } = updatedExpense;
        currentUpdated[ind] = { amount: amount.toString(), ...rest };
        present = true;
      }
    });
    const { amount, ...rest } = updatedExpense;
    if (!present) currentUpdated.push({ amount: amount.toString(), ...rest });
    return currentUpdated;
  });
  setExp(expenses);
};
export default updateFieldChanged;
