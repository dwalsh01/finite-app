import React from 'react';
import GET_ALL_EXPENSES from '../../graphql/GetAllExpenses';
import { Updated } from './ExpensesTable';
import { UpdateExpenses, UpdateExpensesVariables } from '../../types/UpdateExpenses';
import { MutationFunctionOptions } from '../mutations/MutationFunctionOptions';

interface SaveButtonProps {
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
  edit: boolean;
  updated: Updated[];
  mutate: (
    options?: MutationFunctionOptions<UpdateExpenses, UpdateExpensesVariables> | undefined,
  ) => any;
}
const SaveButton: React.FC<SaveButtonProps> = ({ setEdit, edit, updated, mutate }) => {
  return (
    <button
      type="button"
      className="px-4 py-2 m-2 rounded-lg bg-orange-400 :"
      onClick={async () => {
        if (updated.length === 0) {
          setEdit(!edit);
        } else {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const finalUpdated = updated.map(({ __typename, ...rest }) => rest);
          await mutate({
            variables: { updatedExpenses: finalUpdated },
            refetchQueries: () => [{ query: GET_ALL_EXPENSES }],
          });
          setEdit(!edit);
        }
      }}
    >
      Save
    </button>
  );
};

export default SaveButton;
