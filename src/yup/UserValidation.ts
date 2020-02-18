import * as yup from 'yup';

const UserValidation = yup.object().shape({
  email: yup
    .string()
    .email()
    .required('Email Required!'),
  password: yup.string().required('Password Required!'),
  name: yup
    .string()
    .min(1)
    .required('Name Required!'),
});

export default UserValidation;
