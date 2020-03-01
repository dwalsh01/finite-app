import React from 'react';

const AboutUs: React.FC = () => (
  <div id="about-us" className="bg-green-100 mt-32 py-12">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 md:pr-8 lg:pr-16">
          <img src="user_group.svg" className="md:mt-0 mb-16 md:mb-0" alt="user group" />
        </div>
        <div className="md:w-1/2">
          <h3 className="flex flex-col text-4xl text-gray-900 font-bold mb-6">
            About us
            <span className="bg-green-500 h-1 w-20 block mt-4" />
          </h3>
          <p className="text-lg text-gray-700 mb-4">
            We are a small team who build this application for spending-conscious users. We are
            based out of Ireland.
          </p>
          <p className="text-lg text-gray-700">
            We use the latest in web technologies to deliver a well-rounded product to the end user.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default AboutUs;
