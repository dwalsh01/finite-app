import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import GET_INCOME_PERCENTAGE_CHANGE from '../../graphql/GetIncomeChange';
import { getIncomePercentageChange } from '../../types/getIncomePercentageChange';

const IncomeSinceLastMonth: React.FC = () => {
  const { data, loading } = useQuery<getIncomePercentageChange>(GET_INCOME_PERCENTAGE_CHANGE);
  if (loading || !data) {
    return null;
  }

  return (
    <div className="w-full sm:w-1/3 text-center py-8">
      <div className="text-gray-700 mb-2">
        <span className="text-3xl sm:text-xl md:text-3xl align-top">
          <span
            className={` ${
              data?.getIncomeFigures.percentageDifference > 0 ? 'text-green-500' : 'text-red-500'
            } align-top`}
          >
            {data?.getIncomeFigures.percentageDifference > 0 ? '+' : '-'}
          </span>
        </span>
        <span className="text-5xl">
          {Math.abs(data?.getIncomeFigures.percentageDifference).toFixed(2)}
        </span>
        <span className="text-3xl sm:text-xl md:text-3xl align-top">%</span>
      </div>
      <div className="text-sm uppercase text-gray-600 tracking-wide">Since last month (%)</div>
    </div>
  );
};

export default IncomeSinceLastMonth;
