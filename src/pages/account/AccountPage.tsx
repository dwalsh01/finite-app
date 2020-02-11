import React from 'react';
import Navigation from '../../components/navigation/Navigation';

const AccountItem: React.FC = ({ children }) => (
  <div className="sm:mx-2 md:mx-5 w-full sm:w-1/3 md:w-1/2 lg:w-1/5 my-10 p-16 bg-white rounded overflow-hidden shadow-lg">
    {children}
  </div>
);
const AccountPage: React.FC = () => (
  <>
    <div className="container mx-auto lg:px-8">
      <Navigation />
    </div>
    <div className="flex flex-wrap justify-center container mx-auto">
      <AccountItem>Hello</AccountItem>
      <AccountItem>World</AccountItem>
    </div>
    {/* <div className="flex flex-wrap container mx-auto text-center">
      <div className="w-full sm:w-1/2 mb-4 bg-white border-t border-b">
        <div className="border-b">
          <div className="flex justify-between px-6 -mb-px">
            <h3 className="text-gray-800 py-4 font-normal text-xl">Options</h3>
          </div>
        </div>
      </div>
      <div className="w-full sm:w-1/2 mb-4 bg-white border-t border-b">
        <div className="border-b">
          <div className="flex justify-between px-6 -mb-px">
            <h3 className="text-gray-800 py-4 font-normal text-xl">Account</h3>
          </div>
        </div>
      </div>
    </div> */}
  </>
);

export default AccountPage;
