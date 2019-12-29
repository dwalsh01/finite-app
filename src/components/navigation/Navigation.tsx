import React from 'react';
// import { useQuery } from '@apollo/react-hooks';
// import Button from '../button/Button';
import SLink from '../link/Link';
import Button from '../button/Button';
// import ME_QUERY from '../../queries/GetUser';
// import { MeQuery } from '../../types/MeQuery';

// TODO: standardise the buttons in the application
const Navigation: React.FC = () => {
  const [hidden, setHidden] = React.useState(true);
  // const { data, loading } = useQuery<MeQuery>(ME_QUERY);
  // const userCheck = () => {
  //   if (loading) {
  //     return null;
  //   }
  //   if (data && data.me) {
  //     return <Button primary>Logout</Button>;
  //   }
  //   return <Button primary>Login</Button>;
  // };
  React.useEffect(() => {
    console.log('button state changed', hidden);
  }, [hidden]);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between py-6 relative">
      <h3 className="text-2xl font-bold uppercase text-gray-900">FINITE</h3>
      <nav className={`${hidden ? 'hidden' : 'block text-center'} md:flex text-lg`}>
        <SLink to="/">Home</SLink>
        <SLink to="/">Services</SLink>
        <SLink to="/">About</SLink>
        <SLink to="/">Contact</SLink>
        <SLink to="/">FAQ</SLink>
        <Button primary to="/login">
          Sign Up
        </Button>
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
