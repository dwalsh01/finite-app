import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Redirect } from 'react-router';
import tailwindTheme from '../../styles/tailwind-theme';
import LoginForm from './LoginForm';
import ME_QUERY from '../../graphql/GetUser';
import { MeQuery } from '../../types/MeQuery';

const LoginPage: React.FC = () => {
  const { data, loading } = useQuery<MeQuery>(ME_QUERY);

  React.useEffect(() => {
    document.title = 'Finite | Login';
  }, []);

  if (loading) {
    return null;
  }
  if (data?.me) {
    return <Redirect to="/home" />;
  }
  return (
    <div className="overflow-hidden flex items-center justify-center">
      <div className="h-screen w-screen bg-green-500 lg:bg-green-200">
        <div className="container mx-auto">
          <div className="flex justify-center px-6 my-12">
            <div className="w-full xl:w-3/4 lg:w-11/12 flex">
              <div
                className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
                style={{ background: `${tailwindTheme.colors.green[500]}` }}
              />
              <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
                <h3 className="pt-4 text-2xl text-center">Login</h3>
                <LoginForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
