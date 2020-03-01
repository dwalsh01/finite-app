import React from 'react';
import AboutUs from './AboutUs';
import OurProcess from './OurProcess';
import Services from './Services';

const ServicesPage: React.FC = () => (
  <>
    <div>
      <OurProcess />
    </div>
    <div>
      <AboutUs />
    </div>
    <div>
      <Services />
    </div>
  </>
);

export default ServicesPage;
