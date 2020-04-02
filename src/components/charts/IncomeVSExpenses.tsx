import React from 'react';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { useQuery } from '@apollo/react-hooks';
import GET_INCOME_AND_EXPENSE_FOR_MONTH from '../../graphql/GetIncomeForMonth';
import { GetIncomeAndExpenseForMonth } from '../../types/GetIncomeAndExpenseForMonth';
import tailwindTheme from '../../styles/tailwind-theme';
import { CustomTooltip } from './PieChart';
import SectorRadarChart from './SectorRadarChart';
import SelectIncomeChartType from '../income/SelectIncomeChartType';
import useLocalStorage from '../../hooks/useLocalStorage';
import SectorBarChart from './SectorBarChart';

const IncThing = () => {
  const [chart, setChart] = useLocalStorage('finite:sector-chart-type', 'Bar');
  const renderChart = () => {
    switch (chart) {
      case 'Radar':
        return <SectorRadarChart />;
      case 'Bar':
        return <SectorBarChart />;
      default:
        return <SectorRadarChart />;
    }
  };
  return (
    <div className="flex flex-wrap -mx-4">
      <div className="w-full mb-6 lg:mb-0 lg:w-1/2 px-4 flex flex-col">
        <div className="flex-grow flex flex-col bg-white border-t border-b sm:rounded sm:border shadow overflow-hidden">
          <div className="border-b">
            <div className="flex justify-between px-6 -mb-px">
              <h3 className="text-gray-800 py-4 font-normal text-xl">Other Chart</h3>
              <SelectIncomeChartType type={chart} setType={setChart} />
            </div>
          </div>
          <div className="w-full h-full">
            <div className="w-full h-full">{renderChart()}</div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 px-4 flex-1">
        <div className="bg-white h-full border-t border-b sm:rounded sm:border shadow">
          <div className="border-b">
            <div className="flex justify-between px-6 -mb-px">
              <h3 className="text-gray-800 py-4 font-normal text-xl">Income VS Expenses</h3>
            </div>
          </div>
          <div className="text-center px-6 py-4 w-full h-full">
            <div className="w-full h-full">
              <IncomeVSExpenses />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export const IncExpContainer: React.FC = () => (
  <div className="overflow-hidden flex items-center justify-center">
    <div className="flex flex-col w-full">
      <div className="container mx-auto px-4 sm:px-0 pb-8">
        <IncThing />
      </div>
    </div>
  </div>
);

const IncomeVSExpenses: React.FC = () => {
  const { data, loading } = useQuery<GetIncomeAndExpenseForMonth>(GET_INCOME_AND_EXPENSE_FOR_MONTH);
  if (loading || !data) {
    return null;
  }
  const { getTotalForMonth, getTotalIncomeForMonth } = data;
  const shape = [
    { name: 'income', value: getTotalIncomeForMonth },
    { name: 'expenses', value: getTotalForMonth },
  ];
  return (
    <ResponsiveContainer width="100%" height="100%" aspect={4.0 / 3.0}>
      <PieChart>
        <Pie
          dataKey="value"
          data={shape}
          nameKey="name"
          fill="#8884d8"
          startAngle={180}
          endAngle={0}
          outerRadius={80}
          // labelLine={false}
          // label={renderCustomizedLabel}
        >
          {shape.map((exp, index) => {
            return (
              // eslint-disable-next-line
            <Cell fill={exp.name === 'income' ? tailwindTheme.colors.green[500] : tailwindTheme.colors.red[500]} key={index} />
            );
          })}
        </Pie>
        <Legend verticalAlign="bottom" height={36} />
        <Tooltip content={CustomTooltip} />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default IncomeVSExpenses;
