import React from 'react';
import tailwindTheme from '../../styles/tailwind-theme';
import RegisterForm from './RegisterForm';

const RegisterPage: React.FC = () => (
  <div className="overflow-hidden flex items-center justify-center">
    <div className="h-screen w-screen bg-gray-400">
      <div className="container mx-auto">
        <div className="flex justify-center px-6 my-12">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            <div
              className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
              style={{ background: `${tailwindTheme.colors.orange[500]}` }}
            />

            <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
              <h3 className="pt-4 text-2xl text-center">Register</h3>
              <RegisterForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default RegisterPage;