import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GetExpensesThisMonth } from '../../types/GetExpensesThisMonth';
import GET_THIS_MONTH_EXPENSES from '../../graphql/ExpensesThisMonth';
import AddExpenseModal from '../../components/modal/AddExpenseModal';
import Navigation from '../../components/navigation/Navigation';
import ExpensesTrends from '../trends/TrendsPage';
import AddIncomeModal from '../../components/income/AddIncomeModal';
import IncomeTrends from '../../components/income/IncomeTrends';

const HomePage: React.FC = () => {
  const { data, loading } = useQuery<GetExpensesThisMonth>(GET_THIS_MONTH_EXPENSES);

  React.useEffect(() => {
    document.title = 'Finite | Home';
  }, []);

  if (loading || !data) {
    return null;
  }

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
          <>
            <div className="py-2">
              <AddExpenseModal />
            </div>
            <div className="py-2">
              <AddIncomeModal />
            </div>
          </>
          <IncomeTrends />
          <ExpensesTrends />
        </>
      )}
    </>
  );
};

export default HomePage;
