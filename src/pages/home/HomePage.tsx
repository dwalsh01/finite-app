import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import Navigation from '../../components/navigation/Navigation';
import { ExamplePC } from '../../components/charts/RadarChart';
import { GetExpensesThisMonth } from '../../types/GetExpensesThisMonth';
import GET_THIS_MONTH_EXPENSES from '../../graphql/ExpensesThisMonth';
import { totalForTheMonth } from '../../utils/sortExpenses';
import Button from '../../components/button/Button';
import Modal from '../../components/modal/Modal';

const HomePage: React.FC = () => {
  const { data, loading } = useQuery<GetExpensesThisMonth>(GET_THIS_MONTH_EXPENSES);
  if (loading || !data) {
    return null;
  }
  // TODO: update this for when users initially begin, show what information could be shown?
  return (
    <div className="container mx-auto lg:px-8">
      <Navigation />
      {!data?.getExpenses?.expensesThisMonth ? (
        <div className="container mx-auto text-xl text-center sm:p-10 bg-green-200 shadow-md">
          <span className="block pb-5">No expenses this month</span>
          <Button to="/addExpense">Add Expense</Button>
        </div>
      ) : (
        <div>
          <div className="container mx-auto text-xl text-center sm:p-10 bg-green-200 shadow-md">
            <span className="font-extrabold">
              {`$${totalForTheMonth(data.getExpenses.expensesThisMonth).amount}`}
            </span>
            <span className="font-light"> spent this month</span>
          </div>
          <div className="flex flex-wrap pt-5">
            <div className="w-full md:w-1/2 mb-4">
              <Modal />
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
      )}
    </div>
  );
};

export default HomePage;
