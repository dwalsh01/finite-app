import React from 'react';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import { GetExpenses_me_expenses } from '../../types/GetExpenses';
import formatDate from '../../utils/formatDate';

const Card = styled.div`
  ${tw`sm:mx-2 mx-0 block max-w-sm rounded overflow-hidden shadow-lg my-10`}
`;

function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// TODO: fix this up for cards
const CardFull: React.FC<GetExpenses_me_expenses> = ({
  dateOfExpense,
  description,
  amount,
  sectorOfExpense,
}: GetExpenses_me_expenses) => (
  <Card>
    <div className="">
      {/* image section */}
      <img
        className="h048 w-full object-cover"
        src="https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
        alt="Card Payment"
      />
      <div className="px-6 pt-2">
        <h4 className="font-semibold text-lg">{`$${numberWithCommas(amount)}`}</h4>
        <span className="block text-gray-600 text-sm">{formatDate(dateOfExpense)}</span>
        <span className="block">{description}</span>
        <span className="block">{sectorOfExpense}</span>
      </div>
    </div>
    {/* tags */}
    <div className="px-6 py-4">
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
        #photography
      </span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
        #travel
      </span>
      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
        #winter
      </span>
    </div>
    {/* tags end */}
  </Card>
);

export default CardFull;
