import React from 'react';

const DateSelection: React.FC = () => (
  <div className="flex text-sm">
    <button
      type="button"
      className="appearance-none py-4 text-gray-700 border-b border-transparent hover:border-gray-700 mr-3"
    >
      1W
    </button>
    <button
      type="button"
      className="appearance-none py-4 text-green-500 border-b border-green-500 mr-3"
    >
      1M
    </button>
    <button
      type="button"
      className="appearance-none py-4 text-gray-700 border-b border-transparent hover:border-gray-700 mr-3"
    >
      1Y
    </button>
    <button
      type="button"
      className="appearance-none py-4 text-gray-700 border-b border-transparent hover:border-gray-700"
    >
      ALL
    </button>
  </div>
);

export default DateSelection;
