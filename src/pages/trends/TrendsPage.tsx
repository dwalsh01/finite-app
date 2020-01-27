import React from 'react';
import Navigation from '../../components/navigation/Navigation';
import HeadlineTrends from './current/HeadlineTrends';
import RecentActivity from './recent/RecentTrends';

export const Trends: React.FC = () => (
  <div className="overflow-hidden flex items-center justify-center">
    <div className="bg-grey-lighter flex flex-col min-h-screen w-full">
      <div className="flex-grow container mx-auto px-4 sm:px-0 pt-6 pb-8">
        <HeadlineTrends />
        <RecentActivity />
      </div>
    </div>
  </div>
);

const TrendsPage: React.FC = () => (
  <>
    <div className="container mx-auto lg:px-8">
      <Navigation />
    </div>
    <Trends />
  </>
);

export default TrendsPage;
