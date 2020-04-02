import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { GetExpensesThisMonth } from '../../types/GetExpensesThisMonth';
import GET_THIS_MONTH_EXPENSES from '../../graphql/ExpensesThisMonth';
import { TWColors } from './PieChart';
import { GetExpenses_me_expenses } from '../../types/GetExpenses';

export const sumSectors = (expenses: GetExpenses_me_expenses[]) => {
  const total = expenses.reduce((a, b) => a + (b.amount || 0), 0);
  const sectors = [
    { sector: 'Entertainment', amount: 0, total },
    { sector: 'Health', amount: 0, total },
    { sector: 'Food', amount: 0, total },
    { sector: 'Education', amount: 0, total },
    { sector: 'Beauty', amount: 0, total },
    { sector: 'Fashion', amount: 0, total },
    { sector: 'Miscellaneous', amount: 0, total },
  ];
  expenses.forEach(expense => {
    sectors.forEach((sect, index) => {
      if (sect.sector === expense.sectorOfExpense) {
        sectors[index] = {
          sector: expense.sectorOfExpense,
          amount: sect.amount + expense.amount,
          total,
        };
      }
    });
  });
  return sectors.filter(sector => sector.amount !== 0);
};
const SectorBarChart: React.FC = () => {
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
        <ResponsiveContainer width="100%" height="100%" aspect={4.0 / 3.0}>
          <BarChart
            data={sorted}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="sector" />
            <YAxis dataKey="amount" />
            <Tooltip />
            <Legend />
            <Bar dataKey="amount" fill="#8884d8">
              {sorted.map(sector => (
                <Cell key={sector.sector} fill={TWColors[sector.sector]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      ) : null}
    </>
  );
};

export default SectorBarChart;
