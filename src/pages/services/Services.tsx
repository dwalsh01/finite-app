import React from 'react';

const Services: React.FC = () => (
  <div id="services" className="relative">
    <div className="container mx-auto px-6 py-16 relative">
      <h3 className="flex flex-col items-center text-4xl text-secondary font-bold">
        Services we offer
        <span className="bg-green-500 h-1 w-20 block mt-4" />
      </h3>
      <div className="flex flex-col md:flex-row items-center mb-24 md:mb-16 xl:mb-8 mt-16 md:mt-0 md:mt-16 lg:mt-0">
        <div className="px-8 sm:px-0 md:w-1/3 h-full">
          <img src="/dream.svg" className="h-full w-ful" alt="dreaming" />
        </div>
        <div className="md:ml-16 xl:ml-32">
          <h4 className="text-2xl md:text-3xl font-bold text-secondary-800 mb-4">Peace Of Mind</h4>
          <p className="text-secondary-700 text-lg mb-4">
            Thanks to our system you can easily keep track of every penny, leaving you a lot more
            time to think about that holiday!
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row items-center mb-24 md:mb-16 xl:mb-8">
        <div className="md:mr-16 xl:mr-32">
          <h4 className="text-2xl md:text-3xl font-bold text-secondary-800 mb-4">
            Optimised For Users
          </h4>
          <p className="text-secondary-700 text-lg mb-4">
            Use the application on your mobile device or in your browser! We have optimised the
            application to operate seamlessly on both!
          </p>
        </div>
        <img src="smiley_face.svg" className="px-8 sm:px-0 md:w-1/3" alt="service 2" />
      </div>
      <div className="flex flex-col md:flex-row items-center">
        <img src="graphic_chart.svg" className="px-8 sm:px-0 md:w-1/3" alt="service 2" />
        <div className="md:ml-16 xl:ml-32">
          <h4 className="text-2xl md:text-3xl font-bold text-secondary-800 mb-4">
            Graphs, Graphs, Graphs
          </h4>
          <p className="text-secondary-700 text-lg mb-4">
            We have added various views of your spending habits so as to help you make your spending
            decisions!
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Services;
