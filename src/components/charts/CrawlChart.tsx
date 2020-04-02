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
import { CustomTooltip } from './PieChart';
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
  const sorted = sortCrawlExpenses(expenses);

  return (
    // aspect={4.0 / 3.0}
    <ResponsiveContainer width="100%" height="100%" aspect={4.0 / 3.0}>
      <LineChart data={sorted} margin={{ top: 5, right: 30, left: 30, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <YAxis />
        <Tooltip content={CustomTooltip} />
        <Line
          type="monotone"
          dataKey="amount"
          strokeWidth={2}
          stroke={tailwindTheme.colors.green[500]}
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
      <LineChart data={sortedLastMonth}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis dataKey="amount" />
        <Tooltip content={CustomTooltip} />
        <Line
          type="monotone"
          dataKey="amount"
          stroke={tailwindTheme.colors.green[500]}
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ExpensesCrawlChart;
