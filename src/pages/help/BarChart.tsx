import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell } from 'recharts';
import GET_ALL_EXPENSES from '../../graphql/GetAllExpenses';
import { GetExpenses, GetExpenses_me_expenses } from '../../types/GetExpenses';
import { TWColors } from '../../components/charts/PieChart';

const sumSectors = (expenses: GetExpenses_me_expenses[]) => {
  const sectors = [
    { sector: 'Entertainment', amount: 0 },
    { sector: 'Health', amount: 0 },
    { sector: 'Food', amount: 0 },
    { sector: 'Education', amount: 0 },
    { sector: 'Beauty', amount: 0 },
    { sector: 'Fashion', amount: 0 },
    { sector: 'Miscellaneous', amount: 0 },
  ];
  expenses.forEach(expense => {
    sectors.forEach((sect, index) => {
      if (sect.sector === expense.sectorOfExpense) {
        sectors[index] = {
          sector: expense.sectorOfExpense,
          amount: sect.amount + expense.amount,
        };
      }
    });
  });
  return sectors.filter(sector => sector.amount !== 0);
};
const ExampleBarChart: React.FC = () => {
  const { data, loading } = useQuery<GetExpenses>(GET_ALL_EXPENSES);
  if (loading || !data) {
    return null;
  }
  return (
    <>
      {data.me?.expenses ? (
        // <ResponsiveContainer width="100%" height="100%" aspect={4.0 / 3.0}>
        <BarChart
          width={500}
          height={300}
          data={sumSectors(data.me.expenses)}
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
            {sumSectors(data.me.expenses).map(sector => (
              <Cell key={sector.sector} fill={TWColors[sector.sector]} />
            ))}
          </Bar>
        </BarChart>
      ) : // </ResponsiveContainer>
      null}
    </>
  );
};
export default ExampleBarChart;
