import { GetExpenses_me_expenses } from '../types/GetExpenses';
import { GetExpensesLastMonth_getExpenses_expensesLastMonth } from '../types/GetExpensesLastMonth';
import { sortDates } from './sortExpenses';
import { GetExpensesThisMonth_getExpenses_expensesThisMonth } from '../types/GetExpensesThisMonth';

type Result = {
  date: string;
  amount: number;
};
function getTotals(sorted: Record<string, GetExpenses_me_expenses[]>) {
  const keys = Object.keys(sorted);
  const result: Result[] = [];
  keys.forEach(key => {
    const dateExpenses = sorted[key];
    const things = dateExpenses.reduce((a, b) => a + (b.amount || 0), 0);
    result.push({ date: key, amount: things });
  });
  return result;
}
// const sortCrawlExpenses = (expenses: GetExpensesThisMonth_getExpenses_expensesThisMonth[]) => {
const sortSecondExpense = (expenses: GetExpensesLastMonth_getExpenses_expensesLastMonth[]) => {
  const sorted = sortDates(expenses);
  return getTotals(sorted);
};

const sortCrawlExpenses = (expenses: GetExpensesThisMonth_getExpenses_expensesThisMonth[]) => {
  const sorted = sortDates(expenses);

  return getTotals(sorted);
};

export { sortSecondExpense, sortCrawlExpenses };
