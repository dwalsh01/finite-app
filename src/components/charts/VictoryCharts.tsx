import React from 'react';
import { VictoryChart, VictoryTheme, VictoryLine } from 'victory';
import { useQuery } from '@apollo/react-hooks';
import { ExpensesCrawlProps, sortCrawlExpenses } from './CrawlChart';
import {
  GetExpensesLastMonth,
  GetExpensesLastMonth_getExpenses_expensesLastMonth,
} from '../../types/GetExpensesLastMonth';
import GET_LAST_MONTH_EXPENSES from '../../graphql/GetLastMonthExpenses';
import { sortDates } from '../../utils/sortExpenses';

// TODO: FIX THIS MESS PLEASE WTF IS THIS
type Result = {
  date: string;
  amount: number;
};
const sortSecondExpense = (expenses: GetExpensesLastMonth_getExpenses_expensesLastMonth[]) => {
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

const VictoryCharts: React.FC<ExpensesCrawlProps> = ({ expenses }) => {
  const { data, loading } = useQuery<GetExpensesLastMonth>(GET_LAST_MONTH_EXPENSES);
  if (loading || !data?.getExpenses) {
    return null;
  }
  const sortedThisMonth = sortCrawlExpenses(expenses);
  const sortedLastMonth = sortSecondExpense(data.getExpenses.expensesLastMonth);
  console.log(sortedThisMonth);
  console.log(sortedLastMonth);
  return (
    <div className="w-full h-full">
      <VictoryChart theme={VictoryTheme.material}>
        <VictoryLine
          style={{
            data: { stroke: '#c43a31' },
            parent: { border: '1px solid #ccc' },
          }}
          data={sortedThisMonth}
          x="date"
        />
        <VictoryLine
          style={{
            data: { stroke: '#c123da' },
            parent: { border: '1px solid #ccc' },
          }}
          data={sortedLastMonth}
          x="date"
          y="amount"
        />
      </VictoryChart>
    </div>
  );
};

export default VictoryCharts;
