import React from 'react';

const Activity: React.FC = () => (
  <div className="flex-grow flex px-6 py-6 text-grey-darker items-center border-b -mx-4">
    <div className="w-2/5 xl:w-1/4 px-4 flex items-center">
      <span className="text-lg">Bitcoin</span>
    </div>
    <div className="hidden md:flex lg:hidden xl:flex w-1/4 px-4 items-center">
      <div className="bg-grey h-2 w-2 rounded-full mr-2" />
      100%
    </div>
    <div className="flex w-3/5 md:w/12">
      <div className="w-1/2 px-4">
        <div className="text-right">0.0010 BTC</div>
      </div>
      <div className="w-1/2 px-4">
        <div className="text-right text-grey">CA$21.28</div>
      </div>
    </div>
  </div>
);

const RecentActivity: React.FC = () => (
  <div className="flex flex-wrap -mx-4">
    <div className="w-full mb-6 lg:mb-0 lg:w-1/2 px-4 flex flex-col">
      <div className="flex-grow flex flex-col bg-white border-t border-b sm:rounded sm:border shadow overflow-hidden">
        <div className="border-b">
          <div className="flex justify-between px-6 -mb-px">
            <h3 className="text-gray-800 py-4 font-normal text-xl">Recent Activities</h3>
          </div>
        </div>
        <Activity />
        <Activity />
        <Activity />
        <div className="px-6 py-4">
          <div className="text-center text-grey">Total Balance &asymp; CA$21.28</div>
        </div>
      </div>
    </div>
    <div className="w-full lg:w-1/2 px-4">
      <div className="bg-white border-t border-b sm:rounded sm:border shadow">
        <div className="border-b">
          <div className="flex justify-between px-6 -mb-px">
            <h3 className="text-blue-dark py-4 font-normal text-lg">Recent Activity</h3>
          </div>
        </div>
        <div>
          <div className="text-center px-6 py-4">
            <div className="py-8">
              <div className="mb-4">
                <svg
                  className="inline-block fill-current text-grey h-16 w-16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M11.933 13.069s7.059-5.094 6.276-10.924a.465.465 0 0 0-.112-.268.436.436 0 0 0-.263-.115C12.137.961 7.16 8.184 7.16 8.184c-4.318-.517-4.004.344-5.974 5.076-.377.902.234 1.213.904.959l2.148-.811 2.59 2.648-.793 2.199c-.248.686.055 1.311.938.926 4.624-2.016 5.466-1.694 4.96-6.112zm1.009-5.916a1.594 1.594 0 0 1 0-2.217 1.509 1.509 0 0 1 2.166 0 1.594 1.594 0 0 1 0 2.217 1.509 1.509 0 0 1-2.166 0z" />
                </svg>
              </div>
              <p className="text-2xl text-grey-darker font-medium mb-4">No buys or sells yet</p>
              <p className="text-grey max-w-xs mx-auto mb-6">Activity Here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default RecentActivity;
