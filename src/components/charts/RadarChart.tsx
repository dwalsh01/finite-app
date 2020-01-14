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
} from 'recharts';
import { GetExpensesThisMonth_getExpenses_expensesThisMonth } from '../../types/GetExpensesThisMonth';
import { sortExpensesForPC } from '../../utils/sortExpenses';

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

// const CustomTooltip = ({ active, payload, label }: any) => {
//   if (active) {
//     return (
//       <div className="custom-tooltip">
//         <p className="label">{`${label} : ${payload[0].value}`}</p>
//         <p className="intro">{label}</p>
//         <p className="desc">Anything you want can be displayed here.</p>
//       </div>
//     );
//   }

//   return null;
// };

interface PieChartProps {
  expenses: GetExpensesThisMonth_getExpenses_expensesThisMonth[];
}

// TODO: update this to use tailwind colors
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
// This is the pie chart for expenses by sector
export const ExamplePC: React.FC<PieChartProps> = ({ expenses }) => {
  const sortedExpenses = sortExpensesForPC(expenses);
  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie dataKey="amount" data={sortedExpenses} nameKey="sector" fill="#8884d8" label>
            {sortedExpenses.map((_, index) => (
              // eslint-disable-next-line
              <Cell fill={COLORS[index % COLORS.length]} key={index} />
            ))}
          </Pie>
          <Legend verticalAlign="bottom" height={36} />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExampleRadarChart;
