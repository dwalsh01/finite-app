import React from 'react';
import { GridContext } from './Grid';

const GridItem: React.FC = ({ children }) => {
  const { childrenAmount } = React.useContext(GridContext);
  const chooseGridItemType = () => {
    if (childrenAmount === 0) {
      return null;
    }
    if (childrenAmount % 2 === 0) {
      return <div className="w-full md:w-1/2 mb-4 lg:p-10">{children}</div>;
    }
    return <div className="w-full md:w-1/2 lg:w-1/3 mb-4 lg:p-10">{children}</div>;
  };
  return chooseGridItemType();
};

export default GridItem;
