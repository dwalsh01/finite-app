import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GetExpensesThisMonth } from '../../types/GetExpensesThisMonth';
import GET_THIS_MONTH_EXPENSES from '../../graphql/ExpensesThisMonth';
import AddExpenseModal from '../../components/modal/AddExpenseModal';
import Navigation from '../../components/navigation/Navigation';
import Trends from '../trends/Trends';

const HomePage: React.FC = () => {
  const { data, loading } = useQuery<GetExpensesThisMonth>(GET_THIS_MONTH_EXPENSES);

  React.useEffect(() => {
    document.title = 'Finite | Home';
  }, []);

  if (loading || !data) {
    return null;
  }

  // TODO: update this for when users initially begin, show what information could be shown?
  return (
    <>
      <div className="container mx-auto lg:px-8">
        <Navigation />
      </div>

      {!data.getExpenses?.expensesThisMonth ? (
        <div className="container mx-auto text-xl text-center sm:p-10 bg-green-200 shadow-md">
          <span className="block pb-5">No expenses this month</span>
          <AddExpenseModal />
        </div>
      ) : (
        <>
          <AddExpenseModal />
          <Trends />
        </>
      )}
    </>
  );
};

export default HomePage;
