import React from 'react';

const GridItem: React.FC = ({ children }) => (
  <div className="w-full md:w-1/2 lg:w-1/3 mb-4">{children}</div>
);

export default GridItem;
