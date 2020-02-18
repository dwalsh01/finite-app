import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import Navigation from '../../components/navigation/Navigation';
import GET_ALL_EXPENSES from '../../graphql/GetAllExpenses';
import { GetExpenses, GetExpenses_me_expenses } from '../../types/GetExpenses';
import ExpenseCard from '../../components/card/ExpenseCard';
import { sortExpensesByDate } from '../../utils/sortExpenses';
import isToday from '../../utils/isToday';
import AddExpenseModal from '../../components/modal/AddExpenseModal';
import SelectFilter from './RenderOptions';

const ViewExpensesPage: React.FC = () => {
  const { data, loading } = useQuery<GetExpenses>(GET_ALL_EXPENSES);
  const [today, setToday] = React.useState(false);
  const [selectedSector, setSelectedSector] = React.useState<null | string>(null);
  React.useEffect(() => {
    document.title = 'Finite | View Expenses';
    if (data?.me?.expenses) {
      const expenses = sortExpensesByDate({ expenses: data.me.expenses, nearest: true });
      if (expenses.some(expense => isToday(expense.dateOfExpense))) {
        setToday(true);
      }
    }
  }, [data]);

  if (loading || !data?.me) {
    return null;
  }
  const { expenses } = data.me;
  return (
    <>
      <div className="container mx-auto lg:px-8">
        <Navigation />
      </div>
      <div className="flex flex-wrap justify-center sm:px-8">
        {expenses && (
          <SelectFilter setSelectedSector={setSelectedSector} selectedSector={selectedSector} />
        )}
      </div>
      <div>
        {!expenses ? (
          <div className="text-center p-6">
            <h1 className="text-xl font-bold">You have no expenses to date!</h1>
            <div className="my-4">Add some expenses to get started</div>
            <AddExpenseModal />
          </div>
        ) : (
          <>
            <div>
              {today && <h1 className="text-xl font-bold text-center pt-2">Todays Expenses</h1>}
              <div className="flex flex-wrap justify-center px-5 md:px-0">
                {selectedSector && expenses ? (
                  <>
                    {sortExpensesByDate({ expenses, nearest: true })
                      .filter(
                        exp => exp.sectorOfExpense === selectedSector && isToday(exp.dateOfExpense),
                      )
                      .map(expense => (
                        <ExpenseCard key={expense.id} {...expense} />
                      ))}
                  </>
                ) : (
                  <>
                    {sortExpensesByDate({ expenses, nearest: true })
                      .filter(exp => isToday(exp.dateOfExpense))
                      .map(expense => (
                        <ExpenseCard key={expense.id} {...expense} />
                      ))}
                  </>
                )}
              </div>
            </div>

            <div>
              <h1 className="text-xl font-bold text-center">All Expenses</h1>
              <div className="flex flex-wrap justify-center px-5 md:px-0">
                {selectedSector && expenses ? (
                  <>
                    {sortExpensesByDate({ expenses, nearest: true })
                      .filter(exp => exp.sectorOfExpense === selectedSector)
                      .map(expense => (
                        <ExpenseCard key={expense.id} {...expense} />
                      ))}
                  </>
                ) : (
                  <>
                    {sortExpensesByDate({ expenses, nearest: true }).map(
                      (expense: GetExpenses_me_expenses) => (
                        <ExpenseCard key={expense.id} {...expense} />
                      ),
                    )}
                  </>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ViewExpensesPage;
