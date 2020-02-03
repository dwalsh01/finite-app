import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GetTotalExpensesForMonth } from '../../../types/GetTotalExpensesForMonth';
import GET_TOTAL_FOR_MONTH from '../../../graphql/GetTotalExpensesForMonth';
import { splitAmount } from './CurrentTrends';

// TODO: add ability for query to take a parameter of time
const AmountSpent: React.FC = () => {
  const { data, loading } = useQuery<GetTotalExpensesForMonth>(GET_TOTAL_FOR_MONTH);
  if (loading || !data) {
    return null;
  }
  const { integer, decimal } = splitAmount(data.getTotalForMonth);
  return (
    <div className="w-full sm:w-1/3 text-center py-8">
      <div className="border-b sm:border-b-0 sm:border-r">
        <div className="text-gray-700 mb-2">
          <span className="text-3xl sm:text-xl md:text-3xl align-top">EUR€</span>
          <span className="text-5xl">{integer}</span>
          <span className="text-3xl sm:text-xl md:text-3xl align-top">
            <span>.</span>
            {decimal}
          </span>
        </div>

        <div className="mb-2 text-sm uppercase text-gray-600 tracking-wide">Amount spent</div>
      </div>
    </div>
  );
};
export default AmountSpent;
