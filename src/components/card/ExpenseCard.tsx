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
    <div>
      {/* image section */}
      <img
        className="h048 w-full object-cover"
        src="https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
        alt="Card Payment"
      />
      <div className="py-2 px-2">
        <div className="flex content-center">
          <h4 className="inline-block font-semibold text-lg">{`$${numberWithCommas(amount)}`}</h4>
          {isToday(dateOfExpense) && (
            <span className="inline-block m-auto ml-2 bg-purple-200 text-purple-800 text-xs px-2 rounded-full uppercase font-semibold tracking-wide">
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
        <span className="block text-lg">{description}</span>
      </div>
    </div>
    <div className="px-2 py-1 text-sm bg-gray-100">
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 my-1 text-sm font-semibold text-gray-700">
        {`#${sectorOfExpense}`}
      </span>
    </div>
  </Card>
);

export default ExpenseCard;
