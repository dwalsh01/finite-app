import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Redirect, NavLink } from 'react-router-dom';
// import Button from '../../components/button/Button';
import Navigation from '../../components/navigation/Navigation';
import { MeQuery } from '../../types/MeQuery';
import ME_QUERY from '../../graphql/GetUser';
import ServicesPage from '../services/ServicesPage';

const LandingPage: React.FC = () => {
  const { data, loading } = useQuery<MeQuery>(ME_QUERY);

  React.useEffect(() => {
    document.title = 'Finite';
  }, []);

  if (loading) {
    return null;
  }
  if (data?.me) {
    return <Redirect to="/home" />;
  }
  return (
    <>
      <div className="w-full overflow-hidden flex items-center justify-center">
        <div className="bg-white flex flex-col font-sans">
          <div className="container mx-auto px-8">
            <Navigation />
            <div className="flex flex-col-reverse sm:flex-row jusitfy-between items-center py-12">
              <div className="sm:w-2/5 flex flex-col items-center sm:items-start text-center sm:text-left">
                <h1 className="uppercase text-6xl text-gray-900 font-bold leading-none tracking-wide mb-2">
                  Student
                </h1>
                <h2 className="uppercase text-4xl text-orange-500 text-secondary tracking-widest mb-6">
                  Savings
                </h2>
                <p className="text-gray-600 leading-relaxed mb-12">
                  Lorem ipsum dolor sit amet, consectetur adipiscing. Vestibulum rutrum metus at
                  enim congue scelerisque. Sed suscipit metu non iaculis semper consectetur
                  adipiscing elit.
                </p>
                <div>
                  <NavLink
                    className="bg-orange-200 hover:bg-orange-300 py-3 px-6 uppercase text-lg font-medium rounded-lg text-orange-700"
                    to="/register"
                  >
                    Register
                  </NavLink>
                  <NavLink
                    className="ml-5 bg-green-200 hover:bg-green-300 py-3 px-6 uppercase text-lg font-medium rounded-lg text-green-700"
                    to="/login"
                  >
                    Login
                  </NavLink>
                </div>
              </div>
              <div className="w-full sm:w-auto mb-16 sm:mb-0 mt-8 sm:mt-0 sm:w-3/5 sm:pl-12">
                <img src="/credit_card_3.svg" className="h-64 sm:h-auto w-full" alt="logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ServicesPage />
    </>
  );
};

export default LandingPage;
