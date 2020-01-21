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
import tickFormatter from '../../utils/tickFormatter';
import { CustomTooltip } from './RadarChart';
import GET_LAST_MONTH_EXPENSES from '../../graphql/GetLastMonthExpenses';
import { GetExpensesLastMonth } from '../../types/GetExpensesLastMonth';
import tailwindTheme from '../../styles/tailwind-theme';
import { sortCrawlExpenses, sortSecondExpense } from '../../utils/chartFunctions';

export interface ExpensesCrawlProps {
  expenses: GetExpensesThisMonth_getExpenses_expensesThisMonth[];
}

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
  const sorted = sortCrawlExpenses(expenses);
  return (
    <ResponsiveContainer>
      <LineChart margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" tick={Tick} />
        <YAxis />
        <Tooltip content={CustomTooltip} />
        <Line
          type="monotone"
          dataKey="amount"
          data={sorted}
          stroke={tailwindTheme.colors.orange[500]}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export const LastMonthExpenses: React.FC = () => {
  const { data, loading } = useQuery<GetExpensesLastMonth>(GET_LAST_MONTH_EXPENSES);
  if (loading || !data?.getExpenses) {
    return null;
  }
  const sortedLastMonth = sortSecondExpense(data.getExpenses.expensesLastMonth);
  return (
    <ResponsiveContainer>
      <LineChart>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" tick={Tick}>
          {/* <Label value="Last Months Expenses" position="insideRight" /> */}
        </XAxis>
        <YAxis />
        <Tooltip content={CustomTooltip} />
        <Line
          type="monotone"
          dataKey="amount"
          data={sortedLastMonth}
          stroke={tailwindTheme.colors.green[500]}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ExpensesCrawlChart;
