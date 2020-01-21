import React from 'react';

interface GridItemProps {
  lg?: 1 | 2 | 3 | 4 | 5;
}
const GridItem: React.FC<GridItemProps> = ({ children, lg }) => {
  const newChoose = () => {
    return (
      <div className={`w-full md:1/${lg ? `${lg - 1}` : '3'} lg:w-1/${lg || `3`} h-auto mb-4`}>
        {children}
      </div>
    );
  };

  return newChoose();
};

export default GridItem;
