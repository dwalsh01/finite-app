import React from 'react';
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
} from 'recharts';
import { useQuery } from '@apollo/react-hooks';
import { GetExpensesThisMonth_getExpenses_expensesThisMonth } from '../../types/GetExpensesThisMonth';
import { sortDates } from '../../utils/sortExpenses';
import tickFormatter from '../../utils/tickFormatter';
import { CustomTooltip } from './RadarChart';
import GET_LAST_MONTH_EXPENSES from '../../graphql/GetLastMonthExpenses';
import { GetExpensesLastMonth } from '../../types/GetExpensesLastMonth';

export interface ExpensesCrawlProps {
  expenses: GetExpensesThisMonth_getExpenses_expensesThisMonth[];
}

type Result = {
  date: string;
  amount: number;
};
// const sortCrawlExpenses = (expenses: GetExpensesThisMonth_getExpenses_expensesThisMonth[]) => {

export const sortCrawlExpenses = (
  expenses: GetExpensesThisMonth_getExpenses_expensesThisMonth[],
) => {
  const sorted = sortDates(expenses);
  const keys = Object.keys(sorted);
  const result: Result[] = [];
  keys.forEach(key => {
    const dateExpenses = sorted[key];
    const things = dateExpenses.reduce((a, b) => a + (b.amount || 0), 0);
    result.push({ date: key, amount: things });
  });
  return result;
};

// eslint-disable-next-line
export const Tick: React.FC<any> = ({
  payload: { value },
  verticalAnchor,
  visibleTicksCount,
  ...rest
}) => (
  <text {...rest} className="bar-chart-tick" dy={12}>
    {tickFormatter(value)}
  </text>
);

const ExpensesCrawlChart: React.FC<ExpensesCrawlProps> = ({ expenses }) => {
  const { data, loading } = useQuery<GetExpensesLastMonth>(GET_LAST_MONTH_EXPENSES);
  if (loading || !data?.getExpenses) {
    return null;
  }
  // const thing = [...expenses, ...data.getExpenses.expensesLastMonth];
  // console.log(thing);
  // const sortedLast = sortCrawlExpenses(data.getExpenses.expensesLastMonth);
  const sorted = sortCrawlExpenses(expenses);
  return (
    <ResponsiveContainer>
      <LineChart data={sorted} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" tick={Tick} />
        <YAxis />
        <Tooltip content={CustomTooltip} />
        <Line type="monotone" dataKey="amount" stroke="#8884d8" />
        {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ExpensesCrawlChart;
