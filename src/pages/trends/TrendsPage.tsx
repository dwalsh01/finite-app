import React from 'react';
import CurrentTrends from './current/CurrentTrends';
import RecentActivities from './recent/RecentActivities';
import { IncExpContainer } from '../../components/charts/IncomeVSExpenses';

const ExpensesTrends: React.FC = () => (
  <div className="overflow-hidden flex items-center justify-center">
    <div className="bg-grey-lighter flex flex-col min-h-screen w-full">
      <div className="flex-grow container mx-auto px-4 sm:px-0 pb-8">
        <CurrentTrends />
        <IncExpContainer />
        <RecentActivities />
      </div>
    </div>
  </div>
);

export default ExpensesTrends;
