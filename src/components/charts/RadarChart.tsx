import React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  PieChart,
  Pie,
  Legend,
  Cell,
  Tooltip,
  TooltipProps,
} from 'recharts';
import { GetExpensesThisMonth_getExpenses_expensesThisMonth } from '../../types/GetExpensesThisMonth';
import { sortExpensesForPC } from '../../utils/sortExpenses';
import numberWithCommas from '../../utils/formatAmount';
import tailwindTheme from '../../styles/tailwind-theme';

// TODO: Make the radarChart
const data = [
  {
    subject: 'Math',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'Chinese',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'English',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Geography',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'Physics',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'History',
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

const ExampleRadarChart = () => (
  <ResponsiveContainer>
    <RadarChart outerRadius={90} height={200} width={200} data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis angle={30} domain={[0, 150]} />
      <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
      <Legend />
    </RadarChart>
  </ResponsiveContainer>
);

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
  Food: tailwindTheme.colors.green[500],
  Entertainment: tailwindTheme.colors.blue[500],
  Miscellaneous: tailwindTheme.colors.indigo[500],
  Fashion: tailwindTheme.colors.pink[500],
  Health: tailwindTheme.colors.purple[500],
  Education: tailwindTheme.colors.teal[500],
  Beauty: tailwindTheme.colors.yellow[500],
};

interface ExpensesProps {
  expenses: GetExpensesThisMonth_getExpenses_expensesThisMonth[];
}
// This is the pie chart for expenses by sector
export const ExpensesPieChart: React.FC<ExpensesProps> = ({ expenses }) => {
  const sortedExpenses = sortExpensesForPC(expenses);
  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
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
    </div>
  );
};

export default ExampleRadarChart;
