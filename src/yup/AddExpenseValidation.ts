import * as yup from 'yup';

const AddExpenseValidation = yup.object().shape({
  dateOfExpense: yup.date().required(),
  sectorOfExpense: yup.string().required('Password required!'),
  amount: yup
    .number()
    .min(1)
    .required(),
  description: yup
    .string()
    .min(2)
    .required('Descripton required!'),
});

export default AddExpenseValidation;
