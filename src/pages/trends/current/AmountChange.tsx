import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GetAmountChange } from '../../../types/GetAmountChange';
import GET_AMOUNT_CHANGE from '../../../graphql/GetAmountChange';
import { splitAmount } from './CurrentTrends';

const AmountChange: React.FC = () => {
  const { data, loading } = useQuery<GetAmountChange>(GET_AMOUNT_CHANGE);
  if (loading || !data) {
    return null;
  }
  const { decimal, integer } = splitAmount(data.getAmountChange);
  return (
    <div className="w-full sm:w-1/3 text-center py-8">
      <div className="border-b sm:border-b-0 sm:border-r">
        <div className="text-gray-700 mb-2">
          <span className="text-3xl sm:text-xl md:text-3xl align-top">
            <span className="text-green-500 align-top">{data.getAmountChange > 0 ? '+' : '-'}</span>
            EUR€
          </span>
          <span className="text-5xl">{integer}</span>
          <span className="text-3xl sm:text-xl md:text-3xl align-top">
            <span>.</span>
            {decimal}
          </span>
        </div>
        <div className="mb-2 text-sm uppercase text-gray-600 tracking-wide">
          Amount change last month
        </div>
      </div>
    </div>
  );
};
export default AmountChange;
