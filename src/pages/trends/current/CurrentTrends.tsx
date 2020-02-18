import React from 'react';
import AmountSpent from './AmountSpent';
import AmountChange from './AmountChange';
import SinceLastMonth from './SinceLastMonth';
import DateSelection from './DateSelection';

export const splitAmount = (value: number) => {
  const integer = Math.floor(value);
  const decimal = +(value % 1).toFixed(2) * 100;
  return { integer: Math.abs(integer), decimal: Math.abs(decimal) };
};

const CurrentTrends: React.FC = () => (
  <div className="flex-grow container mx-auto px-4 sm:px-0 pb-8">
    <div className="bg-white border-t border-b sm:border-l sm:border-r sm:rounded shadow mb-6 mx-">
      <div className="border-b px-6">
        <div className="flex justify-between -mb-px">
          <div className="text-gray-700 py-4 text-xl">Current Trends</div>
          <DateSelection />
        </div>
      </div>
      <div className="block sm:flex">
        <AmountSpent />
        <AmountChange />
        <SinceLastMonth />
      </div>
    </div>
  </div>
);

export default CurrentTrends;
