import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import Navigation from '../../components/navigation/Navigation';
import GET_ALL_EXPENSES from '../../graphql/GetAllExpenses';
import { GetExpenses, GetExpenses_me_expenses } from '../../types/GetExpenses';
import { sortExpensesByDate } from '../../utils/sortExpenses';
import isToday from '../../utils/isToday';
import AddExpenseModal from '../../components/modal/AddExpenseModal';
import SelectFilter from './RenderOptions';
import SelectExpenseType from '../../components/table/TableOption';
import RenderExpenses from './RenderExpenses';
import ExpensesTable from '../../components/table/ExpensesTable';

const ViewExpensesPage: React.FC = () => {
  const { data, loading } = useQuery<GetExpenses>(GET_ALL_EXPENSES);
  const [today, setToday] = React.useState(false);
  const [selectedSector, setSelectedSector] = React.useState<null | string>(null);
  const [expenseType, setExpenseType] = React.useState('Cards');
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
  const RenderOnType = (exp: GetExpenses_me_expenses[]) => {
    if (expenseType === 'Table') {
      return <ExpensesTable selectedSector={selectedSector} expenses={exp} />;
    }
    return <RenderExpenses today={today} selectedSector={selectedSector} expenses={exp} />;
  };
  return (
    <>
      <div className="container mx-auto lg:px-8">
        <Navigation />
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
            <div className="md:flex mb-4">
              <div className="w-full md:w-1/4 py-4 md:ml-2 bg-gray-400 shadow-lg rounded">
                <div className="flex flex-wrap justify-center">
                  <SelectFilter
                    setSelectedSector={setSelectedSector}
                    selectedSector={selectedSector}
                  />
                  <SelectExpenseType setSelectedType={setExpenseType} selectedType={expenseType} />
                </div>
              </div>
              <div className="w-full md:w-3/4 md:mx-4 bg-gray-100 shadow-lg rounded lg:p-4">
                {RenderOnType(expenses)}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ViewExpensesPage;
