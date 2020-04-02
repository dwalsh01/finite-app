import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import {
  PolarGrid,
  Radar,
  ResponsiveContainer,
  RadarChart,
  PolarAngleAxis,
  PolarRadiusAxis,
} from 'recharts';
import { GetExpensesThisMonth } from '../../types/GetExpensesThisMonth';
import GET_THIS_MONTH_EXPENSES from '../../graphql/ExpensesThisMonth';
import { sumSectors } from './SectorBarChart';

const SectorRadarChart: React.FC = () => {
  const { data, loading } = useQuery<GetExpensesThisMonth>(GET_THIS_MONTH_EXPENSES);
  if (loading || !data) {
    return null;
  }
  const sorted = data?.getExpenses?.expensesThisMonth
    ? sumSectors(data.getExpenses.expensesThisMonth)
    : null;
  return (
    <>
      {sorted ? (
        <ResponsiveContainer width="99%" height="100%" aspect={4.0 / 3.0}>
          <RadarChart outerRadius={150} data={sorted}>
            <PolarGrid />
            <PolarAngleAxis dataKey="sector" />
            <PolarRadiusAxis />
            <Radar
              name="Sector"
              dataKey="amount"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
      ) : null}
    </>
  );
};

export default SectorRadarChart;
