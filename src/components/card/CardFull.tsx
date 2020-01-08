import React from 'react';
import Card from './Card';

// TODO: fix this up for cards
const CardFull: React.FC = () => (
  <Card>
    {/* image section */}
    <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" />
    {/* end image section */}
    {/* text section */}
    <div className="px-6 py-4">
      {/* headline */}
      <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
      {/* end headline */}
      {/* description */}
      <p className="text-gray-700 text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores
        et perferendis eaque, exercitationem praesentium nihil.
      </p>
      {/* description end */}
    </div>
    {/* end text section */}
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
