import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { ExamplePC } from '../../components/charts/RadarChart';
import { GetExpensesThisMonth } from '../../types/GetExpensesThisMonth';
import GET_THIS_MONTH_EXPENSES from '../../graphql/ExpensesThisMonth';
import { totalForTheMonth } from '../../utils/sortExpenses';
import Button from '../../components/button/Button';
import AddExpenseModal from '../../components/modal/AddExpenseModal';
import numberWithCommas from '../../utils/formatAmount';
import Navigation from '../../components/navigation/Navigation';

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
      {!data?.getExpenses?.expensesThisMonth ? (
        <div className="container mx-auto text-xl text-center sm:p-10 bg-green-200 shadow-md">
          <span className="block pb-5">No expenses this month</span>
          <Button to="/addExpense">Add Expense</Button>
        </div>
      ) : (
        <div>
          <div className="container mx-auto text-xl text-center p-10 bg-green-200 shadow-md">
            <span className="font-extrabold">
              {`$${numberWithCommas(totalForTheMonth(data.getExpenses.expensesThisMonth).amount)}`}
            </span>
            <span className="font-light"> spent this month</span>
            <AddExpenseModal />
          </div>
          <div className="flex flex-wrap pt-5">
            <div className="w-full md:w-1/2 mb-4">
              <ExamplePC expenses={data.getExpenses.expensesThisMonth} />
            </div>
            {/* <div className="w-full md:w-1/2 mb-4">
              <ExamplePC expenses={data.getExpenses.expensesThisMonth} />
            </div>
            <div className="w-full md:w-1/2 mb-4">
              <ExamplePC expenses={data.getExpenses.expensesThisMonth} />
            </div>
            <div className="w-full md:w-1/2 mb-4">
              <ExamplePC expenses={data.getExpenses.expensesThisMonth} />
            </div> */}
          </div>
        </div>
      )}
    </>
  );
};

export default HomePage;
