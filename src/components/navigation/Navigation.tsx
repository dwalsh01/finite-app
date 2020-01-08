import React from 'react';
import { useLocation } from 'react-router';
import SLink from '../link/Link';
import LogoutButtonCheck from '../button/LogoutButton';

// different navbar for landing over logged in ?
const Navigation: React.FC = () => {
  const [hidden, setHidden] = React.useState(true);
  const { pathname } = useLocation();
  return (
    <div className="flex flex-col md:flex-row items-center justify-between py-6 relative">
      <h3 className="text-2xl font-bold uppercase text-gray-900">FINITE</h3>
      <nav className={`${hidden ? 'hidden' : 'block text-center'} md:flex text-lg`}>
        {pathname !== '/' ? (
          <>
            <SLink to="/home">Home</SLink>
            <SLink to="/addExpense">Expenses</SLink>
            <SLink to="/home">Trends</SLink>
            <SLink to="/home">TBD</SLink>
          </>
        ) : (
          <>
            <SLink to="/home">Home</SLink>
            <SLink to="/">Services</SLink>
            <SLink to="/">About</SLink>
            <SLink to="/">Contact</SLink>
            <SLink to="/">FAQ</SLink>
          </>
        )}
        <LogoutButtonCheck />
      </nav>
      <button
        className="flex md:hidden flex-col absolute top-0 right-0 p-4 mt-5"
        type="button"
        onClick={() => {
          setHidden(prev => !prev);
        }}
      >
        <span className="w-5 h-px mb-1 bg-orange-500" />
        <span className="w-5 h-px mb-1 bg-orange-500" />
        <span className="w-5 h-px mb-1 bg-orange-500" />
      </button>
    </div>
  );
};

export default Navigation;
