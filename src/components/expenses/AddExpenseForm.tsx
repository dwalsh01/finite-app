import React from 'react';
import { Formik, Form, FormikProps } from 'formik';
import { format } from 'date-fns';
import { useMutation } from '@apollo/react-hooks';
import { useHistory, useLocation } from 'react-router-dom';
import { AddExpenseMutation } from '../../types/AddExpenseMutation';
import ADD_EXPENSE_MUTATION from '../../graphql/AddExpense';
import GET_THIS_MONTH_EXPENSES from '../../graphql/ExpensesThisMonth';

// TODO: decide on sectors of spending
interface FormValues {
  dateOfExpense: string;
  sectorOfExpense: 'Entertainment' | 'Business' | 'Schooling' | 'Retail' | 'Other';
  amount: number;
  description: string;
}

const AddExpenseForm: React.FC = () => {
  const today = new Date();
  const [mutate, { data }] = useMutation<AddExpenseMutation>(ADD_EXPENSE_MUTATION);
  const history = useHistory();
  const { pathname } = useLocation();
  return (
    <Formik
      initialValues={{
        dateOfExpense: format(today, 'yyyy-MM-dd'),
        sectorOfExpense: 'Schooling',
        amount: 0,
        description: '',
      }}
      onSubmit={async (values: FormValues, actions) => {
        const response = await mutate({
          variables: { ...values },
          refetchQueries: () => [{ query: GET_THIS_MONTH_EXPENSES }],
        });
        console.log(response);
        if (response?.data?.addExpense) {
          actions.setSubmitting(false);
        }
        history.push(pathname);
      }}
    >
      {(formikBag: FormikProps<FormValues>) => (
        <Form className="px-8 pt-6  mb-4 bg-white">
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="amount">
              Amount
              <input
                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="amount"
                type="number"
                placeholder="Amount (€)"
                value={formikBag.values.amount}
                onChange={formikBag.handleChange}
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="dateOfExpense">
              Date Of Expense
              <input
                // border-red-500
                className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="dateOfExpense"
                type="date"
                value={formikBag.values.dateOfExpense}
                onChange={formikBag.handleChange}
              />
            </label>
          </div>
          <div className="w-full mb-4">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="sector"
            >
              Categories
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="sector"
                  value={formikBag.values.sectorOfExpense}
                  onChange={event => formikBag.setFieldValue('sectorOfExpense', event.target.value)}
                >
                  <option>Entertainment</option>
                  <option>Business</option>
                  <option>Schooling</option>
                  <option>Retail</option>
                  <option>Other</option>
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
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="description">
              Description
              <input
                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="description"
                type="text"
                placeholder="Description"
                value={formikBag.values.description}
                onChange={formikBag.handleChange}
              />
            </label>
          </div>
          <div className="mb-6 text-center">
            <button
              className="w-full px-4 py-2 font-bold text-white bg-purple-500 rounded-full hover:bg-purple-700 focus:outline-none focus:shadow-outline"
              type="submit"
              disabled={formikBag.isSubmitting || !formikBag.isValid}
              onClick={() => formikBag.handleSubmit}
            >
              Submit
            </button>
          </div>
          <hr className="mb-6 border-t" />
          {data?.addExpense && (
            <div className="text-center">
              <div className="inline-block text-sm text-green-500 align-baseline">
                Successfully Added Expense!
              </div>
              <button
                type="button"
                className="w-full px-4 py-2 font-bold text-white bg-purple-500 rounded-full hover:bg-green-700 focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </div>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default AddExpenseForm;
