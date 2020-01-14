import React from 'react';
import Navigation from '../../components/navigation/Navigation';
import HeadlineTrends from './HeadlineTrends';
import RecentActivity from './TrendsMore';

const TrendsPage: React.FC = () => (
  <>
    <div className="container mx-auto lg:px-8">
      <Navigation />
    </div>
    <div className="overflow-hidden flex items-center justify-center">
      <div className="bg-grey-lighter flex flex-col min-h-screen w-full">
        <div className="flex-grow container mx-auto sm:px-4 pt-6 pb-8">
          <HeadlineTrends />
          <RecentActivity />
        </div>
      </div>
    </div>
  </>
);

export default TrendsPage;
