import React from 'react';
import { useLocation } from 'react-router';
import { NavLink, NavLinkProps } from 'react-router-dom';
import LogoutButtonCheck from '../button/LogoutButton';

const NavigationLink: React.FC<NavLinkProps> = ({ children, to, exact }) => {
  return (
    <NavLink
      className="text-gray-800 hover:text-green-500 py-3 px-6"
      to={to}
      exact={exact}
      activeClassName="text-green-400 font-semibold"
    >
      {children}
    </NavLink>
  );
};
const Navigation: React.FC = () => {
  const [hidden, setHidden] = React.useState(true);
  const { pathname } = useLocation();
  const paths = ['/', '/services', '/about', '/contact', '/faq'];
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between py-6 relative">
      <h3 className="text-2xl font-bold uppercase text-gray-900">FINITE</h3>
      <nav className={`${hidden ? 'hidden' : 'block text-center'} md:flex text-lg`}>
        {paths.includes(pathname) ? (
          <>
            <NavigationLink to="/">Home</NavigationLink>
            <NavigationLink to="/services">Services</NavigationLink>
            <NavigationLink to="/about">About</NavigationLink>
            <NavigationLink to="/contact">Contact</NavigationLink>
            <NavigationLink to="/faq">FAQ</NavigationLink>
            <LogoutButtonCheck />
          </>
        ) : (
          <>
            <NavigationLink to="/home">Home</NavigationLink>
            <NavigationLink to="/expenses">Expenses</NavigationLink>
            <NavigationLink to="/help">Help</NavigationLink>
            <NavigationLink to="/account">Account</NavigationLink>
            <LogoutButtonCheck />
          </>
        )}
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
