import React from 'react';

type ChartSelectionProps = {
  chart: 'Pie Chart' | 'Crawl Chart';
  setChart: React.Dispatch<React.SetStateAction<'Pie Chart' | 'Crawl Chart'>>;
};
const ChartSelection: React.FC<ChartSelectionProps> = ({ chart, setChart }) => (
  <div className="flex text-sm">
    <button
      type="button"
      className={`${
        chart === 'Pie Chart' ? 'text-green-500 border-green-500' : ''
      } appearance-none py-4 border-b mr-3`}
      onClick={() => setChart('Pie Chart')}
    >
      Pie Chart
    </button>
    <button
      type="button"
      className={`${
        chart === 'Crawl Chart' ? 'text-green-500 border-green-500' : 'hover:border-gray-700'
      } appearance-none py-4 text-gray-700 border-b border-transparent mr-3`}
      onClick={() => setChart('Crawl Chart')}
    >
      Crawl Chart
    </button>
  </div>
);

export default ChartSelection;
