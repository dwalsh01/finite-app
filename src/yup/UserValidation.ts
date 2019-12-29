import * as yup from 'yup';

const UserValidation = yup.object().shape({
  email: yup
    .string()
    .email()
    .required('Email Required!'),
  password: yup.string().required('Password Required!'),
});

export default UserValidation;
