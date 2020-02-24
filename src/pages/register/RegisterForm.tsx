import React from 'react';
import { RouteComponentProps, withRouter, NavLink, useHistory } from 'react-router-dom';
import { useApolloClient, useMutation } from '@apollo/react-hooks';
import { Formik, FormikProps, Form, FormikHelpers } from 'formik';
import ME_QUERY from '../../graphql/GetUser';
import UserValidation from '../../yup/UserValidation';
import { RegisterMutation, RegisterMutationVariables } from '../../types/RegisterMutation';
import REGISTER_MUTATION from '../../graphql/RegisterUser';
// TODO: fix login and register form validation
interface RegisterFormValues {
  email: string;
  password: string;
  name: string;
}
const RForm: React.FC<RouteComponentProps> = () => {
  const client = useApolloClient();
  const history = useHistory();
  const [mutate, { data }] = useMutation<RegisterMutation, RegisterMutationVariables>(
    REGISTER_MUTATION,
    {
      update(cache, result) {
        if (!result.data?.register?.registered || !result.data.register.user) {
          return;
        }
        cache.writeQuery({
          query: ME_QUERY,
          data: { me: result.data.register.user },
        });
      },
    },
  );

  const handleSubmit = async (
    values: RegisterFormValues,
    formikHelpers: FormikHelpers<RegisterFormValues>,
  ) => {
    if (client) {
      client.resetStore();
    }
    formikHelpers.setSubmitting(false);
    await mutate({
      variables: { ...values },
    }).then(response => {
      if (response.data?.register.registered) {
        history.push('/home');
      }
    });
  };

  return (
    <Formik
      initialValues={{ email: '', password: '', name: '' }}
      validationSchema={UserValidation}
      onSubmit={handleSubmit}
    >
      {(formikBag: FormikProps<RegisterFormValues>) => (
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
            {data && !data?.register.registered && (
              <p className="text-xs italic text-red-500">Email already exists</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="name">
              Name
              <input
                className={`w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline ${
                  formikBag.touched.name && formikBag.errors.name ? 'border-red-500' : ''
                }`}
                id="name"
                type="text"
                placeholder="name"
                value={formikBag.values.name}
                onChange={formikBag.handleChange}
                onBlur={formikBag.handleBlur}
              />
            </label>
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
              className={`w-full px-4 py-2 font-bold text-white bg-orange-500 rounded hover:bg-orange-700 focus:outline-none focus:shadow-outline ${
                !formikBag.dirty ||
                formikBag.isSubmitting ||
                Object.keys(formikBag.errors).length !== 0
                  ? 'opacity-50 cursor-not-allowed'
                  : ''
              }`}
              type="submit"
              disabled={
                !formikBag.dirty ||
                formikBag.isSubmitting ||
                Object.keys(formikBag.errors).length !== 0
              }
              onClick={() => formikBag.handleSubmit}
            >
              Register
            </button>
          </div>
          <hr className="mb-6 border-t" />
          <div className="text-center">
            <NavLink
              className="inline-block text-sm text-orange-500 align-baseline hover:text-orange-800"
              to="/login"
            >
              Already got an account? Login!
            </NavLink>
          </div>
        </Form>
      )}
    </Formik>
  );
};

const RegisterForm = withRouter(RForm);

export default RegisterForm;
