import React from 'react';
import Navigation from '../../components/navigation/Navigation';
import ExampleBarChart from './BarChart';

const HelpPage: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Finite | Help';
  }, []);

  return (
    <>
      <div className="container mx-auto lg:px-8">
        <Navigation />
      </div>
      <div className="text-center px-6 py-4 h-auto w-auto">
        <ExampleBarChart />
      </div>
    </>
  );
};

export default HelpPage;
