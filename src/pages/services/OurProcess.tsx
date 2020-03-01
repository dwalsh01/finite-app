import React from 'react';

const OurProcess: React.FC = () => (
  <div id="our-process" className="relative">
    <div className="container mx-auto px-6 pt-6 pb-12 relative">
      <h3 className="flex flex-col items-center text-4xl text-gray-900 font-bold mb-12">
        Our process
        <span className="bg-green-500 h-1 w-20 block mt-4" />
      </h3>
      <div className="flex flex-col md:flex-row xl:px-32">
        <div className="flex flex-col items-center md:px-6 lg:px-12">
          <span className="text-6xl text-green-500">1</span>
          <h4 className="font-semibold text-2xl text-gray-800 mb-2">Analysis</h4>
          <p className="text-center text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet est
          </p>
        </div>
        <div className="flex flex-col items-center md:px-6 lg:px-12">
          <span className="text-6xl text-green-500">2</span>
          <h4 className="font-semibold text-2xl text-gray-800 mb-2">Execution</h4>
          <p className="text-center text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet est
          </p>
        </div>
        <div className="flex flex-col items-center md:px-6 lg:px-12">
          <span className="text-6xl text-green-500">3</span>
          <h4 className="font-semibold text-2xl text-gray-800 mb-2">Success</h4>
          <p className="text-center text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet est
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default OurProcess;
