import React from 'react';

interface SelectProps {
  setType: (value: Function | string) => void;
  type: string;
}
const SelectIncomeChartType: React.FC<SelectProps> = ({ setType, type }) => (
  <div className="flex text-sm">
    <button
      type="button"
      className={`${
        type === 'Bar' ? 'text-green-500 border-green-500' : ''
      } appearance-none py-4 border-b mr-3`}
      onClick={() => setType('Bar')}
    >
      Bar Chart
    </button>
    <button
      type="button"
      className={`${
        type === 'Radar' ? 'text-green-500 border-green-500' : 'hover:border-gray-700'
      } appearance-none py-4 text-gray-700 border-b border-transparent mr-3`}
      onClick={() => setType('Radar')}
    >
      Radar Chart
    </button>
  </div>
);

export default SelectIncomeChartType;
