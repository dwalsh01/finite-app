import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import GET_INCOME_AMOUNT_CHANGE from '../../graphql/GetIncomeAmountChange';
import { splitAmount } from '../../pages/trends/current/CurrentTrends';
import { GetIncomeAmountChange } from '../../types/GetIncomeAmountChange';
import { getKeyValue } from '../../pages/register/RegisterForm';
import CURRENCIES from '../../utils/currencies';

const IncomeAmountChange: React.FC = () => {
  const { data, loading } = useQuery<GetIncomeAmountChange>(GET_INCOME_AMOUNT_CHANGE);
  if (loading || !data || !data?.getIncomeFigures) {
    return null;
  }

  const { decimal, integer } = splitAmount(data.getIncomeFigures.amountDifference);
  return (
    <div className="w-full sm:w-1/3 text-center py-8">
      <div className="border-b sm:border-b-0 sm:border-r">
        <div className="text-gray-700 mb-2">
          <span className="text-3xl sm:text-xl md:text-3xl align-top">
            <span
              className={` ${
                data.getIncomeFigures.amountDifference > 0 ? 'text-green-500' : 'text-red-500'
              } align-top`}
            >
              {data.getIncomeFigures.amountDifference > 0 ? '+' : '-'}
            </span>
            {data?.me?.currency && getKeyValue(data.me?.currency)(CURRENCIES).symbol}
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
export default IncomeAmountChange;
