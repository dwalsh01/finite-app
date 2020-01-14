import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import Navigation from '../../components/navigation/Navigation';
import GET_ALL_EXPENSES from '../../graphql/GetAllExpenses';
import { GetExpenses } from '../../types/GetExpenses';
import ExpenseCard from '../../components/card/ExpenseCard';
import { sortExpensesByDate } from '../../utils/sortExpenses';
import isToday from '../../utils/isToday';
import AddExpenseModal from '../../components/modal/AddExpenseModal';

const ViewExpensesPage: React.FC = () => {
  const { data, loading } = useQuery<GetExpenses>(GET_ALL_EXPENSES);
  const expensesToday = React.useRef(false);
  React.useEffect(() => {
    document.title = 'Finite | View Expenses';
    if (data?.me?.expenses) {
      const expenses = sortExpensesByDate({ expenses: data.me.expenses, nearest: true });
      if (expenses.some(expense => isToday(expense.dateOfExpense))) {
        expensesToday.current = true;
      }
    }
  }, [data]);

  if (loading) {
    return null;
  }
  return (
    <>
      <div className="container mx-auto lg:px-8">
        <Navigation />
      </div>
      <div className="bg-gray-100">
        {!data?.me?.expenses ? (
          <div className="text-center p-6">
            <h1 className="text-xl font-bold">You have no expenses to date!</h1>
            <div>Add some expenses to get started</div>
            <AddExpenseModal />
          </div>
        ) : (
          <>
            <div>
              {expensesToday && (
                <h1 className="text-xl font-bold text-center pt-2">Todays Expenses</h1>
              )}
              <div className="flex flex-wrap justify-center px-5 md:px-0">
                {sortExpensesByDate({ expenses: data.me.expenses, nearest: true }).map(expense => {
                  if (isToday(expense.dateOfExpense)) {
                    return <ExpenseCard key={expense.id} {...expense} />;
                  }
                  return null;
                })}
              </div>
            </div>

            <div>
              <h1 className="text-xl font-bold text-center">All Expenses</h1>
              <div className="flex flex-wrap justify-center px-5 md:px-0">
                {sortExpensesByDate({ expenses: data.me.expenses, nearest: true }).map(expense => {
                  return <ExpenseCard key={expense.id} {...expense} />;
                })}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ViewExpensesPage;
