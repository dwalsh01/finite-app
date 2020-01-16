import React from 'react';

interface GridProps {
  padding?: 1 | 2 | 3 | 4;
}
const Grid: React.FC<GridProps> = ({ children, padding }) => (
  <div
    className={`container flex flex-wrap content-center ${
      padding ? `p-${padding}` : ''
    } mx-auto pt-5`}
  >
    {children}
  </div>
);

export default Grid;
