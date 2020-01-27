import React from 'react';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import { GetExpenses_me_expenses } from '../../types/GetExpenses';
import formatDate from '../../utils/formatDate';
import numberWithCommas from '../../utils/formatAmount';
import isToday from '../../utils/isToday';
import isFuture from '../../utils/isFuture';

const Card = styled.div`
  ${tw`sm:mx-2 w-full sm:w-1/3 md:w-1/4 lg:w-1/5 my-10 md:mx-5 bg-white max-w-sm rounded overflow-hidden shadow-lg`}
`;

// TODO: fix this up for cards
const ExpenseCard: React.FC<GetExpenses_me_expenses> = ({
  dateOfExpense,
  description,
  amount,
  sectorOfExpense,
}: GetExpenses_me_expenses) => (
  <Card>
    <div className="h-full">
      {/* image section */}
      <img className="w-full object-cover" src="./undraw-online.svg" alt="Card Payment" />

      <div className="py-2 px-2">
        <div className="flex items-center">
          <h4 className="inline-block text-gray-700 font-medium text-lg">
            {`€${numberWithCommas(amount)}`}
          </h4>
          {isToday(dateOfExpense) && (
            <span className="inline-block px-2 mx-2 bg-purple-200 text-purple-800 text-xs rounded uppercase font-semibold tracking-wide">
              new
            </span>
          )}
          {isFuture(dateOfExpense) && (
            <span className="inline-block m-auto ml-2 bg-teal-200 text-teal-800 text-xs px-2 rounded-full uppercase font-semibold tracking-wide">
              Future
            </span>
          )}
        </div>
        <div className="flex items-baseline">
          <span className="text-gray-600 text-sm">{formatDate(dateOfExpense)}</span>
        </div>
        <span className="text-gray-700 text-base">{description}</span>
      </div>
      <span className="inline-block mb-2 ml-2 bg-gray-300 text-gray-800 text-xs p-1 rounded-full uppercase font-semibold tracking-wide">
        {`#${sectorOfExpense}`}
      </span>
    </div>
  </Card>
);

export default ExpenseCard;
