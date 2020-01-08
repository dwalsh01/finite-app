import _ from 'lodash';
import { GetExpenses_me_expenses } from '../types/GetExpenses';

const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

function groupDatesAndKeys(expenses: GetExpenses_me_expenses[]) {
  const groupByDate = _.mapValues(_.groupBy(expenses, 'dateOfExpense'));
  const dates = Object.keys(groupByDate);
  return { groupByDate, dates };
}

// the dates that are passed are grouped by day and sorted in order
function sortDates(expenses: GetExpenses_me_expenses[]) {
  const groupByDate = _.mapValues(_.groupBy(expenses, 'dateOfExpense'));
  const dates = Object.keys(groupByDate);
  dates.sort((a: string, b: string) => {
    return new Date(a).getTime() - new Date(b).getTime();
  });
  const sortedDates: Record<string, GetExpenses_me_expenses[]> = {};
  dates.forEach(date => {
    sortedDates[date] = groupByDate[date];
  });

  return sortedDates;
}

interface Total {
  amount: number;
  month: string;
}
// TODO: make this a function that takes a second parameter which is month, week, quarter, year
function totalForTheMonth(expenses: GetExpenses_me_expenses[]) {
  const { groupByDate, dates } = groupDatesAndKeys(expenses);
  const total: Total = { amount: 0, month: '' };
  dates.forEach(date => {
    const expensesOnDate = groupByDate[date];
    expensesOnDate.forEach(exp => {
      if (total.month === '') {
        total.month = MONTH_NAMES[new Date(exp.dateOfExpense).getMonth()];
      }
      total.amount += exp.amount;
    });
  });
  return total;
}

export { totalForTheMonth, sortDates };
