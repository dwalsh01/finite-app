import React from 'react';
import Navigation from '../../components/navigation/Navigation';

const HomePage: React.FC = () => (
  <div className="container mx-auto px-8">
    <Navigation />
    <div className="container mx-auto text-xl text-center sm:p-10 bg-green-200">
      <span className="font-extrabold">$1,000,000 </span>
      <span className="font-light">spent this month</span>
    </div>
    <div className="flex flex-wrap">
      <div className="w-full sm:w-1/2 mb-4 bg-gray-500">GRAPH HERE</div>
      <div className="w-full sm:w-1/2 mb-4 bg-gray-400">$ AMOUNT DIFFERENCE ON LAST MONTH/WEEK</div>
    </div>
  </div>
);

export default HomePage;
