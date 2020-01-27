import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import GET_RECENT_EXPENSES from '../../../graphql/GetRecentExpenses';
import { GetRecentExpenses, GetRecentExpensesVariables } from '../../../types/GetRecentExpenses';
import { GetExpensesThisMonth } from '../../../types/GetExpensesThisMonth';
import GET_THIS_MONTH_EXPENSES from '../../../graphql/ExpensesThisMonth';
import { ExpensesPieChart } from '../../../components/charts/RadarChart';
import formatDate from '../../../utils/formatDate';

const Activities: React.FC = () => {
  const { data, loading } = useQuery<GetRecentExpenses, GetRecentExpensesVariables>(
    GET_RECENT_EXPENSES,
    {
      variables: {
        first: 5,
      },
    },
  );
  if (loading || !data) {
    return null;
  }
  const renderRecent = () => {
    return data.getRecentExpenses.map(expense => (
      <div
        key={expense.id}
        className="flex-grow flex px-6 py-6 text-grey-darker items-center border-b -mx-4"
      >
        <div className="w-2/5 xl:w-1/4 px-4 flex items-center">
          <span className="text-lg">{formatDate(expense.dateOfExpense, true)}</span>
        </div>
        <div className="hidden md:flex lg:hidden xl:flex w-1/4 px-4 items-center">
          <div className="bg-grey h-2 w-2 rounded-full mr-2" />
          100%
        </div>
        <div className="flex w-3/5 md:w/12">
          <div className="w-1/2 px-4">
            <div className="text-right">{expense.sectorOfExpense}</div>
          </div>
          <div className="w-1/2 px-4">
            <div className="text-right text-grey">{`€${expense.amount}`}</div>
          </div>
        </div>
      </div>
    ));
  };
  return <>{renderRecent()}</>;
};

const OtherInformation: React.FC = () => {
  const { data, loading } = useQuery<GetExpensesThisMonth>(GET_THIS_MONTH_EXPENSES);
  if (loading || !data) {
    return null;
  }
  const renderExpenses = () => {
    if (data.getExpenses?.expensesThisMonth) {
      return <ExpensesPieChart expenses={data.getExpenses.expensesThisMonth} />;
    }
    return null;
  };
  return (
    <div className="w-full lg:w-1/2 px-4 flex-1">
      <div className="bg-white h-full border-t border-b sm:rounded sm:border shadow">
        <div className="border-b">
          <div className="flex justify-between px-6 -mb-px">
            <h3 className="text-blue-dark py-4 font-normal text-lg">Recent Activity</h3>
          </div>
        </div>
        <div>
          <div className="text-center px-6 py-4">
            <div className="py-8">{renderExpenses()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const RecentActivity: React.FC = () => (
  <div className="flex flex-wrap -mx-4">
    <div className="w-full mb-6 lg:mb-0 lg:w-1/2 px-4 flex flex-col">
      <div className="flex-grow flex flex-col bg-white border-t border-b sm:rounded sm:border shadow overflow-hidden">
        <div className="border-b">
          <div className="flex justify-between px-6 -mb-px">
            <h3 className="text-gray-800 py-4 font-normal text-xl">Recent Activities</h3>
          </div>
        </div>
        <Activities />
        <div className="px-6 py-4">
          <div className="text-center text-grey">Total Balance &asymp; CA$21.28</div>
        </div>
      </div>
    </div>
    <OtherInformation />
  </div>
);

export default RecentActivity;
