import React from 'react';
import { RouteComponentProps, withRouter, NavLink, useHistory } from 'react-router-dom';
import { useApolloClient, useMutation } from '@apollo/react-hooks';
import { Formik, FormikProps, Form, FormikHelpers } from 'formik';
import ME_QUERY from '../../graphql/GetUser';
import { UserLoginValidation } from '../../yup/UserValidation';
import LOGIN_MUTATION from '../../graphql/LoginUser';
import { LoginMutationVariables, LoginMutation } from '../../types/LoginMutation';

interface LoginFormValues {
  email: string;
  password: string;
}
const LForm: React.FC<RouteComponentProps> = () => {
  const client = useApolloClient();
  const history = useHistory();
  const [mutate] = useMutation<LoginMutation, LoginMutationVariables>(LOGIN_MUTATION, {
    update(cache, result) {
      if (!result.data?.login?.user) {
        return;
      }
      cache.writeQuery({
        query: ME_QUERY,
        data: { me: result.data.login.user },
      });
    },
  });
  const handleSubmit = async (
    values: LoginFormValues,
    formikHelpers: FormikHelpers<LoginFormValues>,
  ) => {
    if (client) {
      await client.resetStore();
    }
    formikHelpers.setSubmitting(false);
    console.log(`handle submit`);
    await mutate({
      variables: { ...values },
    }).then(response => {
      if (response.data?.login?.user) {
        history.push('/home');
      }
    });
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={UserLoginValidation}
      onSubmit={handleSubmit}
    >
      {(formikBag: FormikProps<LoginFormValues>) => (
        <Form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
              Email
              <input
                className={`w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline ${
                  formikBag.touched.email && formikBag.errors.email ? 'border-red-500' : ''
                }`}
                id="email"
                type="text"
                placeholder="email"
                value={formikBag.values.email}
                onChange={formikBag.handleChange}
                onBlur={formikBag.handleBlur}
              />
            </label>
            {formikBag.touched.email && formikBag.errors.email && (
              <p className="text-xs italic text-red-500">Please enter a valid email address.</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
              Password
              <input
                className={`w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline ${
                  formikBag.touched.password && formikBag.errors.password ? 'border-red-500' : ''
                }`}
                id="password"
                type="password"
                placeholder="password"
                value={formikBag.values.password}
                onChange={formikBag.handleChange}
                onBlur={formikBag.handleBlur}
              />
            </label>
            {formikBag.touched.password && formikBag.errors.password && (
              <p className="text-xs italic text-red-500">Please enter a valid password.</p>
            )}
          </div>
          <div className="mb-6 text-center">
            <button
              className={`w-full px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-700 focus:outline-none focus:shadow-outline ${
                !formikBag.dirty || formikBag.isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              type="submit"
              disabled={!formikBag.dirty || formikBag.isSubmitting}
              onClick={() => formikBag.handleSubmit}
            >
              Login
            </button>
          </div>
          <hr className="mb-6 border-t" />
          <div className="text-center">
            <NavLink
              className="inline-block text-sm text-green-500 align-baseline hover:text-green-800"
              to="/register"
            >
              Want to register? Click me!
            </NavLink>
          </div>
        </Form>
      )}
    </Formik>
  );
};

const LoginForm = withRouter(LForm);

export default LoginForm;
