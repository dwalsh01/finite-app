import React from 'react';
import { Formik, Form, FormikProps } from 'formik';
import { format } from 'date-fns';
import { useMutation } from '@apollo/react-hooks';
import { AddExpenseMutation } from '../../types/AddExpenseMutation';
import ADD_EXPENSE_MUTATION from '../../graphql/AddExpense';
import GET_THIS_MONTH_EXPENSES from '../../graphql/ExpensesThisMonth';
import GET_ALL_EXPENSES from '../../graphql/GetAllExpenses';
import AddExpenseValidation from '../../yup/AddExpenseValidation';

interface FormValues {
  dateOfExpense: string;
  sectorOfExpense:
    | 'Entertainment'
    | 'Health'
    | 'Food'
    | 'Education'
    | 'Beauty'
    | 'Fashion'
    | 'Miscellaneous';
  amount: number;
  description: string;
}

interface AddExpenseProps {
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}
const AddExpenseForm: React.FC<AddExpenseProps> = () => {
  const today = new Date();
  const [mutate, { data }] = useMutation<AddExpenseMutation>(ADD_EXPENSE_MUTATION);

  return (
    <Formik
      validationSchema={AddExpenseValidation}
      initialValues={{
        dateOfExpense: format(today, 'yyyy-MM-dd'),
        sectorOfExpense: 'Entertainment',
        amount: 1,
        description: '',
      }}
      onSubmit={async (values: FormValues, actions) => {
        const response = await mutate({
          variables: { ...values },
          refetchQueries: () => [{ query: GET_THIS_MONTH_EXPENSES }, { query: GET_ALL_EXPENSES }],
        });
        if (response?.data?.addExpense) {
          actions.setSubmitting(false);
          actions.resetForm();
        }
      }}
    >
      {(formikBag: FormikProps<FormValues>) => (
        <Form className="px-8 pt-6  mb-4 bg-white">
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="amount">
              Amount
              <input
                className={`w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline ${
                  formikBag.touched.amount && formikBag.errors.amount ? 'border-red-500' : ''
                }`}
                id="amount"
                type="number"
                placeholder="Amount (€)"
                value={formikBag.values.amount}
                onChange={formikBag.handleChange}
                onBlur={formikBag.handleBlur}
              />
            </label>
            {formikBag.touched.amount && formikBag.errors.amount && (
              <p className="text-xs italic text-red-500">Please a valid number.</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="dateOfExpense">
              Date Of Expense
              <input
                className={`w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline ${
                  formikBag.touched.dateOfExpense && formikBag.errors.dateOfExpense
                    ? 'border-red-500'
                    : ''
                }`}
                id="dateOfExpense"
                type="date"
                value={formikBag.values.dateOfExpense}
                onChange={formikBag.handleChange}
                onBlur={formikBag.handleBlur}
              />
            </label>
            {formikBag.touched.dateOfExpense && formikBag.errors.dateOfExpense && (
              <p className="text-xs italic text-red-500">Please enter valid date</p>
            )}
          </div>
          <div className="w-full mb-4">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="sector"
            >
              Categories
              <div className="relative">
                <select
                  className={`block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
                    formikBag.touched.sectorOfExpense && formikBag.errors.sectorOfExpense
                      ? 'border-red-500'
                      : ''
                  }`}
                  id="sector"
                  value={formikBag.values.sectorOfExpense}
                  onChange={event => formikBag.setFieldValue('sectorOfExpense', event.target.value)}
                  onBlur={formikBag.handleBlur}
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
            </label>
            {formikBag.errors.sectorOfExpense && (
              <p className="text-xs italic text-red-500">Please a valid number.</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="description">
              Description
              <input
                className={`w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline ${
                  formikBag.touched.description && formikBag.errors.description
                    ? 'border-red-500'
                    : ''
                }`}
                id="description"
                type="text"
                placeholder="Description"
                value={formikBag.values.description}
                onChange={formikBag.handleChange}
              />
            </label>
            {formikBag.touched.description && formikBag.errors.description && (
              <p className="text-xs italic text-red-500">
                Please a description (i.e. place of purchase or description of good(s) purchased)
              </p>
            )}
          </div>
          <div className="mb-6 text-center">
            <button
              className={`w-full px-4 py-2 font-bold bg-indigo-200 rounded-full text-white hover:bg-indigo-300 text-indigo-700 focus:outline-none focus:shadow-outline ${
                !formikBag.dirty || formikBag.isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              type="submit"
              disabled={!formikBag.dirty || formikBag.isSubmitting || !formikBag.isValid}
              onClick={() => formikBag.handleSubmit}
            >
              Add Expense
            </button>
          </div>
          <hr className="mb-6 border-t" />
          {data?.addExpense && (
            <div className="text-center">
              <div className="inline-block text-sm text-green-500 align-baseline">
                Successfully Added Expense!
              </div>
            </div>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default AddExpenseForm;
