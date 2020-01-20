import React from 'react';

interface GridProps {
  padding?: 1 | 2 | 3 | 4;
}

interface GridContextProps {
  childrenAmount: number;
}

export const GridContext = React.createContext<GridContextProps>({ childrenAmount: 0 });

const Grid: React.FC<GridProps> = ({ children, padding }) => {
  return (
    <GridContext.Provider value={{ childrenAmount: React.Children.count(children) }}>
      <div
        className={`container flex flex-wrap content-center ${
          padding ? `p-${padding}` : ''
        } mx-auto pt-5`}
      >
        {children}
      </div>
    </GridContext.Provider>
  );
};

export default Grid;
