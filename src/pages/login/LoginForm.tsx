import React from 'react';
import { RouteComponentProps, withRouter, NavLink } from 'react-router-dom';
import { useApolloClient, useMutation } from '@apollo/react-hooks';
import { Formik, FormikProps, Form } from 'formik';
import ME_QUERY from '../../graphql/GetUser';
import UserValidation from '../../yup/UserValidation';
import LOGIN_MUTATION from '../../graphql/LoginUser';
import { LoginMutationVariables, LoginMutation } from '../../types/LoginMutation';

interface LoginFormValues {
  email: string;
  password: string;
}
const LForm: React.FC<RouteComponentProps> = ({ history }) => {
  const client = useApolloClient();
  const [mutate] = useMutation<LoginMutation, LoginMutationVariables>(LOGIN_MUTATION, {
    update(cache, { data }) {
      if (!data || !data?.login) {
        return;
      }
      cache.writeQuery({
        query: ME_QUERY,
        data: { me: data.login },
      });
    },
  });

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={UserValidation}
      onSubmit={async (values: LoginFormValues, actions) => {
        if (client) {
          await client.resetStore();
        }
        await mutate({
          variables: { ...values },
        });
        actions.setSubmitting(false);
        history.push('/home');
      }}
    >
      {(formikBag: FormikProps<LoginFormValues>) => (
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
              className="w-full px-4 py-2 font-bold text-white bg-green-500 rounded-full hover:bg-green-700 focus:outline-none focus:shadow-outline"
              type="submit"
              disabled={formikBag.isSubmitting || !formikBag.isValid}
              onClick={() => formikBag.handleSubmit}
            >
              Sign In
            </button>
          </div>
          <hr className="mb-6 border-t" />
          <div className="text-center">
            <NavLink
              className="inline-block text-sm text-green-500 align-baseline hover:text-green-800"
              to="/register"
            >
              Create an Account!
            </NavLink>
          </div>
        </Form>
      )}
    </Formik>
  );
};

const LoginForm = withRouter(LForm);

export default LoginForm;
