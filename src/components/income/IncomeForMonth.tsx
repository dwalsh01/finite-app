import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { getKeyValue } from '../../pages/register/RegisterForm';
import CURRENCIES from '../../utils/currencies';
import GET_THIS_MONTH_INCOME from '../../graphql/GetThisMonthIncome';
import { splitAmount } from '../../pages/trends/current/CurrentTrends';
import { GetThisMonthIncome } from '../../types/GetThisMonthIncome';

const IncomeForMonth: React.FC = () => {
  const { data, loading } = useQuery<GetThisMonthIncome>(GET_THIS_MONTH_INCOME);
  if (loading || !data?.getIncomeFigures || !data.me) {
    return null;
  }
  const { decimal, integer } = splitAmount(data.getIncomeFigures.totalThisMonth);
  return (
    <div className="w-full sm:w-1/3 text-center py-8">
      <div className="border-b sm:border-b-0 sm:border-r">
        <div className="text-gray-700 mb-2">
          <span className="text-3xl sm:text-xl md:text-3xl align-top">
            {data?.me && getKeyValue(data.me.currency)(CURRENCIES).symbol}
          </span>
          <span className="text-5xl">{integer}</span>
          <span className="text-3xl sm:text-xl md:text-3xl align-top">
            <span>.</span>
            {decimal}
          </span>
        </div>

        <div className="mb-2 text-sm uppercase text-gray-600 tracking-wide">Income Expected</div>
      </div>
    </div>
  );
};

export default IncomeForMonth;
