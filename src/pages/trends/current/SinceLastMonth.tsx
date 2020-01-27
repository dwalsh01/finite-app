import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GetPercentageChange } from '../../../types/GetPercentageChange';
import GET_PERCENTAGE_CHANGE from '../../../graphql/GetPercentageChange';

const SinceLastMonth: React.FC = () => {
  const { data, loading } = useQuery<GetPercentageChange>(GET_PERCENTAGE_CHANGE);
  if (loading || !data) {
    return null;
  }
  return (
    <>
      <div className="text-gray-700 mb-2">
        <span className="text-3xl align-top">
          <span className="text-green-500 align-top">
            {data.getPercentageChange > 0 ? '+' : '-'}
          </span>
        </span>
        <span className="text-5xl">{data.getPercentageChange.toFixed(2)}</span>
        <span className="text-3xl align-top">%</span>
      </div>
      <div className="text-sm uppercase text-gray-600 tracking-wide">Since last month (%)</div>
    </>
  );
};

export default SinceLastMonth;
