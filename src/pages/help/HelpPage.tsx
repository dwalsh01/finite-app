import React from 'react';
import Navigation from '../../components/navigation/Navigation';

const HelpPage: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Finite | Help';
  }, []);

  return (
    <div className="container mx-auto lg:px-8">
      <Navigation />
    </div>
  );
};

export default HelpPage;
