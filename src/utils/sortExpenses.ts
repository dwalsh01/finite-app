import _ from 'lodash';
import { GetExpenses_me_expenses } from '../types/GetExpenses';

interface Final {
  month: string;
  amount: number;
  dateOfExpense: string;
}

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

// OLD
// ----------------------------------------------------------------------
// TODO: make this function take a second argument which will sort based on month/date specific
// TODO: clean this up
const sortExpenses = (expenses: GetExpenses_me_expenses[]) => {
  // this is already taking in this months expenses (where called at the moment)
  // group by date
  const res = _.mapValues(_.groupBy(expenses, 'dateOfExpense'));
  // eslint-disable-next-line
  const ret: any = [];
  let month = '';
  // dates
  const keys = Object.keys(res);
  const final: Final = { month, amount: 0, dateOfExpense: '' };
  keys.forEach(key => {
    const objs = res[key];
    objs.forEach((item: GetExpenses_me_expenses) => {
      if (month === '') {
        month = MONTH_NAMES[new Date(item.dateOfExpense).getMonth()];
      }
      final.amount += item.amount;
      final.month = MONTH_NAMES[new Date(item.dateOfExpense).getMonth()];
      final.dateOfExpense = item.dateOfExpense;
      ret.push(final);
    });
  });

  ret.sort((a: Final, b: Final) => {
    return new Date(a.dateOfExpense).getTime() - new Date(b.dateOfExpense).getTime();
  });
  return {
    sortedThisMonth: res,
    month,
    totalMonth: final.amount,
  };
};

// --------------------------------------------------

export function groupDatesAndKeys(expenses: GetExpenses_me_expenses[]) {
  const groupByDate = _.mapValues(_.groupBy(expenses, 'dateOfExpense'));
  const dates = Object.keys(groupByDate);
  return { groupByDate, dates };
}

// the dates that are passed are grouped by day and sorted in order
export function sortDates(expenses: GetExpenses_me_expenses[]) {
  const groupByDate = _.mapValues(_.groupBy(expenses, 'dateOfExpense'));
  const dates = Object.keys(groupByDate);
  dates.sort((a: string, b: string) => {
    return new Date(a).getTime() - new Date(b).getTime();
  });
  // eslint-ignore-next-line
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
export function totalForTheMonth(expenses: GetExpenses_me_expenses[]) {
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

export default sortExpenses;
