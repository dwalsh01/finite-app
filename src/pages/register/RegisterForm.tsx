import React from 'react';
import { RouteComponentProps, withRouter, NavLink } from 'react-router-dom';
import { useApolloClient, useMutation } from '@apollo/react-hooks';
import { Formik, FormikProps, Form } from 'formik';
import ME_QUERY from '../../graphql/GetUser';
import UserValidation from '../../yup/UserValidation';
import { RegisterMutation, RegisterMutationVariables } from '../../types/RegisterMutation';
import REGISTER_MUTATION from '../../graphql/RegisterUser';

interface RegisterFormValues {
  email: string;
  password: string;
}
const RForm: React.FC<RouteComponentProps> = ({ history }) => {
  const client = useApolloClient();
  const [mutate] = useMutation<RegisterMutation, RegisterMutationVariables>(REGISTER_MUTATION, {
    update(cache, { data }) {
      if (!data?.register?.registered || !data.register.user) {
        return;
      }
      cache.writeQuery({
        query: ME_QUERY,
        data: { me: data.register.user },
      });
    },
  });
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={UserValidation}
      onSubmit={async (values: RegisterFormValues, actions) => {
        console.log(values);
        if (client) {
          client.resetStore();
        }
        await mutate({
          variables: { ...values },
        });
        actions.setSubmitting(false);
        history.push('/login');
      }}
    >
      {(formikBag: FormikProps<RegisterFormValues>) => (
        <Form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
              Email
              <input
                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                placeholder="email"
                value={formikBag.values.email}
                onChange={formikBag.handleChange}
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
              Password
              <input
                // border-red-500
                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="password"
                value={formikBag.values.password}
                onChange={formikBag.handleChange}
              />
            </label>

            {/* <p className="text-xs italic text-red-500">Please choose a password.</p> */}
          </div>
          <div className="mb-6 text-center">
            <button
              className="w-full px-4 py-2 font-bold text-white bg-orange-500 rounded-full hover:bg-orange-700 focus:outline-none focus:shadow-outline"
              type="submit"
              disabled={formikBag.isSubmitting || !formikBag.isValid}
              onClick={() => formikBag.handleSubmit}
            >
              Sign Up
            </button>
          </div>
          <hr className="mb-6 border-t" />
          <div className="text-center">
            <NavLink
              className="inline-block text-sm text-orange-500 align-baseline hover:text-orange-800"
              to="/register"
            >
              Create an Account!
            </NavLink>
          </div>
          {/* <div className="text-center">
                <a
                  className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                  href="./forgot-passwrd"
                >
                  Forgot Password?
                </a>
              </div> */}
        </Form>
      )}
    </Formik>
  );
};

const RegisterForm = withRouter(RForm);

export default RegisterForm;
