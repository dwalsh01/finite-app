import React from 'react';
import Navigation from '../../components/navigation/Navigation';
import { ExamplePC } from '../../components/charts/RadarChart';
import AmountThisMonth from './AmountThisMonth';
import AddExpenseForm from '../../components/expenses/AddExpenseForm';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto lg:px-8">
      <Navigation />
      <div className="container mx-auto text-xl text-center sm:p-10 bg-green-200 shadow-md">
        <span className="font-extrabold">
          <AmountThisMonth />
        </span>
        <span className="font-light"> spent this month</span>
      </div>
      <div className="flex flex-wrap pt-5">
        <div className="w-full md:w-1/2 mb-4">
          <AddExpenseForm />
        </div>
        <div className="w-full md:w-1/2 mb-4">
          <ExamplePC />
        </div>
        <div className="w-full md:w-1/2 mb-4">
          <ExamplePC />
        </div>
        <div className="w-full md:w-1/2 mb-4">
          <ExamplePC />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
