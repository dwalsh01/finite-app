import React from 'react';
import AmountSpent from './AmountSpent';
import AmountChange from './AmountChange';
import SinceLastMonth from './SinceLastMonth';
import DateSelection from './DateSelection';

export const splitAmount = (value: number) => {
  const integer = Math.floor(value);
  const decimal = +(value % 1).toFixed(2) * 100;
  return { integer, decimal };
};

const HeadlineTrends: React.FC = () => (
  <div className="flex-grow container mx-auto px-4 sm:px-0 pt-6 pb-8">
    <div className="bg-white border-t border-b sm:border-l sm:border-r sm:rounded shadow mb-6 mx-">
      <div className="border-b px-6">
        <div className="flex justify-between -mb-px">
          <div className="text-gray-800 py-4 text-xl">Current Trends</div>
          <DateSelection />
        </div>
      </div>
      <div className="block sm:flex">
        <AmountSpent />
        <AmountChange />
        <div className="w-full sm:w-1/3 text-center py-8">
          <SinceLastMonth />
        </div>
      </div>
    </div>
  </div>
);

export default HeadlineTrends;
