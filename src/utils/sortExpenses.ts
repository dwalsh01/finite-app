import _ from 'lodash';
import { GetExpenses_me_expenses } from '../types/GetExpenses';
import { GetExpensesThisMonth_getExpenses_expensesThisMonth } from '../types/GetExpensesThisMonth';

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

export function groupDatesAndKeys(expenses: GetExpenses_me_expenses[]) {
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

type SortProps = {
  expenses: GetExpenses_me_expenses[];
  nearest?: boolean;
};

const sortExpensesByDate = ({ expenses, nearest = false }: SortProps) => {
  const sorted = expenses.sort((a, b) => {
    return new Date(a.dateOfExpense).getTime() - new Date(b.dateOfExpense).getTime();
  });
  if (nearest) {
    return sorted.reverse();
  }
  return sorted;
};

type SectorData = {
  sector: string;
  amount: number;
};

const sortExpensesForPC = (expenses: GetExpensesThisMonth_getExpenses_expensesThisMonth[]) => {
  const sectors: SectorData[] = [];
  expenses.forEach(expense => {
    if (sectors.some(e => e.sector === expense.sectorOfExpense)) {
      const index = sectors.findIndex(item => item.sector === expense.sectorOfExpense);
      if (index !== -1) {
        sectors[index] = { ...sectors[index], amount: expense.amount + sectors[index].amount };
      }
    } else {
      sectors.push({ sector: expense.sectorOfExpense, amount: expense.amount });
    }
  });
  return sectors;
};

export { totalForTheMonth, sortDates, sortExpensesByDate, sortExpensesForPC };
