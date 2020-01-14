import React from 'react';

const DateSelection: React.FC = () => (
  <div className="flex text-sm">
    <button
      type="button"
      className="appearance-none py-4 text-gray-700 border-b border-transparent hover:border-gray-700 mr-3"
    >
      1M
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

const HeadlineTrends: React.FC = () => (
  <div className="flex-grow container mx-auto sm:px-4 pt-6 pb-8">
    <div className="bg-white border-t border-b sm:border-l sm:border-r sm:rounded shadow mb-6 mx-">
      <div className="border-b px-6">
        <div className="flex justify-between -mb-px">
          <div className="text-gray-800 py-4 text-xl">Current Trends</div>

          <DateSelection />
        </div>
      </div>
      <div className="block sm:flex">
        {/* dollar amount  */}
        <div className="w-full sm:w-1/3 text-center py-8">
          <div className="border-b sm:border-b-0 sm:border-r">
            <div className="text-gray-800 mb-2">
              <span className="block text-lg md:text-2xl lg:text-3xl">EUR€</span>
              <span className="text-3xl md:text-4xl lg:text-5xl">21,404</span>
              <span className="text-lg md:text-2xl lg:text-3xl align-top">.74</span>
            </div>
            <div className="mb-2 text-sm uppercase text-gray-600 tracking-wide">Amount spent</div>
          </div>
        </div>
        {/* dollar amount  */}
        {/* amount rise */}
        <div className="w-full sm:w-1/3 text-center py-8">
          <div className="border-b sm:border-b-0 sm:border-r">
            <div className="text-gray-800 mb-2">
              <span className="block text-lg md:text-2xl lg:text-3xl">EUR€</span>
              <span className="text-3xl md:text-4xl lg:text-5xl">
                <span className="text-xl align-middle">+</span>
                12,998
              </span>
              <span className="text-2xl lg:text-3xl align-top">.48</span>
            </div>
            <div className="mb-2 text-sm uppercase text-gray-600 tracking-wide">
              Amount change last month
            </div>
          </div>
        </div>
        {/* amount rise */}
        {/* % */}
        <div className="w-full sm:w-1/3 text-center py-8">
          <div>
            <div className="text-gray-800 mb-2">
              <span className="text-x2 lg:text-3xl">
                <span className="block text-green-500 align-top">+</span>
              </span>
              <span className="text-4xl lg:text-5xl">154.47</span>
              <span className="text-2xl lg:text-3xl align-top">%</span>
            </div>
            <div className="text-sm uppercase text-gray-600 tracking-wide">
              Since last month (%)
            </div>
          </div>
        </div>
        {/* end % */}
        {/* end thingy */}
      </div>
    </div>
  </div>
);

export default HeadlineTrends;
