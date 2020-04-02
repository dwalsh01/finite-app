import React from 'react';
import { Formik, Form, FormikProps } from 'formik';
import { format } from 'date-fns';
import { useMutation } from '@apollo/react-hooks';
import { AddIncomeMutation } from '../../types/AddIncomeMutation';
import ADD_INCOME_MUTATION from '../../graphql/AddIncomeMutation';
import GET_INCOME_PERCENTAGE_CHANGE from '../../graphql/GetIncomeChange';
import GET_INCOME_AMOUNT_CHANGE from '../../graphql/GetIncomeAmountChange';
import GET_THIS_MONTH_INCOME from '../../graphql/GetThisMonthIncome';
// import AddExpenseValidation from '../../yup/AddExpenseValidation';

interface FormValues {
  date: string;
  sector:
    | 'Wage'
    | 'Rent'
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

interface AddIncomeProps {
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}
const AddIncomeForm: React.FC<AddIncomeProps> = ({ setToggle }) => {
  const today = new Date();
  const [mutate, { data }] = useMutation<AddIncomeMutation>(ADD_INCOME_MUTATION);

  return (
    <Formik
      // validationSchema={AddExpenseValidation}
      initialValues={{
        date: format(today, 'yyyy-MM-dd'),
        sector: 'Wage',
        amount: 1,
        description: '',
      }}
      onSubmit={async (values: FormValues, actions) => {
        const response = await mutate({
          variables: { ...values },
          refetchQueries: () => [
            { query: GET_INCOME_PERCENTAGE_CHANGE },
            { query: GET_INCOME_AMOUNT_CHANGE },
            { query: GET_THIS_MONTH_INCOME },
          ],
        });
        if (response?.data?.addIncome) {
          actions.setSubmitting(false);
          actions.resetForm();
        }
      }}
    >
      {(formikBag: FormikProps<FormValues>) => (
        <Form className="px-8 pt-6 mb-4 bg-white">
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
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="date">
              Date
              <input
                className={`w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline ${
                  formikBag.touched.date && formikBag.errors.date ? 'border-red-500' : ''
                }`}
                id="date"
                type="date"
                value={formikBag.values.date}
                onChange={formikBag.handleChange}
                onBlur={formikBag.handleBlur}
              />
            </label>
            {formikBag.touched.date && formikBag.errors.date && (
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
                    formikBag.touched.sector && formikBag.errors.sector ? 'border-red-500' : ''
                  }`}
                  id="sector"
                  value={formikBag.values.sector}
                  onChange={event => formikBag.setFieldValue('sector', event.target.value)}
                  onBlur={formikBag.handleBlur}
                >
                  <option>Wages</option>
                  <option>Rent</option>
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
            {formikBag.errors.sector && (
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
          <div className="flex content-center flex-row-reverse px-2 py-2">
            <button
              type="submit"
              className={`p-2 bg-green-200 hover:bg-green-300 text-green-700 focus:outline-none focus:shadow-outline rounded ${
                !formikBag.dirty || formikBag.isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={!formikBag.dirty || formikBag.isSubmitting || !formikBag.isValid}
              onClick={() => formikBag.handleSubmit}
            >
              Submit
            </button>
            <button
              type="button"
              className="p-2 mx-2 bg-gray-200 hover:bg-gray-300 text-gray-700 focus:outline-none focus:shadow-outline rounded"
              onClick={() => setToggle(false)}
            >
              Cancel
            </button>
          </div>
          {/* <hr className="mb-6 border-t" /> */}
          {data?.addIncome && (
            <div className="text-center">
              <div className="inline-block text-sm text-green-500 align-baseline">
                Successfully Added Income!
              </div>
            </div>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default AddIncomeForm;
