import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Legend, Cell, Tooltip, TooltipProps } from 'recharts';
import { GetExpensesThisMonth_getExpenses_expensesThisMonth } from '../../types/GetExpensesThisMonth';
import { sortExpensesForPC } from '../../utils/sortExpenses';
import numberWithCommas from '../../utils/formatAmount';
import tailwindTheme from '../../styles/tailwind-theme';

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export const CustomTooltip = ({ active, payload }: TooltipProps) => {
  if (active) {
    return (
      <div className="shadow-lg bg-gray-100 rounded p-2 text-center">
        <p className="text-lg font-semibold">
          {`€${payload && numberWithCommas(payload[0].value)}`}
        </p>
        {/* <p className="desc">Anything you want can be displayed here.</p> */}
      </div>
    );
  }

  return null;
};

const TWColors: any = {
  Food: tailwindTheme.colors.purple[400],
  Entertainment: tailwindTheme.colors.blue[300],
  Miscellaneous: tailwindTheme.colors.indigo[400],
  Fashion: tailwindTheme.colors.pink[400],
  Health: tailwindTheme.colors.green[300],
  Education: tailwindTheme.colors.teal[300],
  Beauty: tailwindTheme.colors.yellow[300],
};

interface ExpensesProps {
  expenses: GetExpensesThisMonth_getExpenses_expensesThisMonth[];
}
// This is the pie chart for expenses by sector
export const ExpensesPieChart: React.FC<ExpensesProps> = ({ expenses }) => {
  if (expenses.length === 0) {
    return (
      <div className="text-center px-6 py-4">
        <div className="py-8">
          <div className="mb-4">
            <svg
              className="inline-block fill-current text-gray-800 h-16 w-16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M11.933 13.069s7.059-5.094 6.276-10.924a.465.465 0 0 0-.112-.268.436.436 0 0 0-.263-.115C12.137.961 7.16 8.184 7.16 8.184c-4.318-.517-4.004.344-5.974 5.076-.377.902.234 1.213.904.959l2.148-.811 2.59 2.648-.793 2.199c-.248.686.055 1.311.938.926 4.624-2.016 5.466-1.694 4.96-6.112zm1.009-5.916a1.594 1.594 0 0 1 0-2.217 1.509 1.509 0 0 1 2.166 0 1.594 1.594 0 0 1 0 2.217 1.509 1.509 0 0 1-2.166 0z" />
            </svg>
          </div>
          <p className="text-2xl text-grey-darker font-medium mb-4">
            No expenses this month (yet)!
          </p>
          <p className="text-grey max-w-xs mx-auto mb-6">
            {/* You&apos;ve got no expenses this month! */}
            Add some expenses to get started!
          </p>
        </div>
      </div>
    );
  }
  const sortedExpenses = sortExpensesForPC(expenses);
  return (
    <ResponsiveContainer width="100%" height="100%" aspect={4.0 / 3.0}>
      <PieChart>
        <Pie
          dataKey="amount"
          data={sortedExpenses}
          nameKey="sector"
          fill="#8884d8"
          labelLine={false}
          label={renderCustomizedLabel}
        >
          {sortedExpenses.map((exp, index) => {
            return (
              // eslint-disable-next-line
              <Cell fill={TWColors[exp.sector]} key={index} />
            );
          })}
        </Pie>
        <Legend verticalAlign="bottom" height={36} />
        <Tooltip content={CustomTooltip} />
      </PieChart>
    </ResponsiveContainer>
  );
};
