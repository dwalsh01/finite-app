import React from 'react';

interface GridProps {
  padding?: 0 | 1 | 2 | 3 | 4;
  spacing?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  container?: boolean;
  content?:
    | 'content-start'
    | 'content-center'
    | 'content-end'
    | 'content-between'
    | 'content-around';
}

interface GridContextProps {
  childrenAmount: number;
}

const Grid: React.FC<GridProps> = ({ children, padding, container, content }) => {
  return (
    <div
      className={`${container ? 'container' : ''} flex flex-wrap ${content} ${
        padding ? `p-${padding}` : ''
      } mx-auto pt-5`}
    >
      {children}
    </div>
  );
};

Grid.defaultProps = {
  padding: 0,
  spacing: 1,
  container: true,
  content: 'content-center',
};
export default Grid;
