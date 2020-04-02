import Expenses from '../entity/Expenses';

function isThisMonth(expense: Expenses, cb: (amount: number) => void): void {
  const now = new Date();
  const dateOfExpense = new Date(expense.dateOfExpense);
  if (
    dateOfExpense.getMonth() === now.getMonth() &&
    dateOfExpense.getFullYear() === now.getFullYear() &&
    dateOfExpense.getDate() <= now.getDate()
  ) {
    cb(expense.amount);
  }
}
function isThisMonthInc(date: string) {
  const now = new Date();
  const dateOfExpense = new Date(date);
  if (
    dateOfExpense.getMonth() === now.getMonth() &&
    dateOfExpense.getFullYear() === now.getFullYear()
  ) {
    return true;
  }
  return false;
}

function isPreviousMonthInc(date: string) {
  const now = new Date();
  const dateOfExpense = new Date(date);
  // const day = now.getDate();
  const lastMonth = now.getMonth() === 0 ? 11 : now.getMonth() - 1;
  const lastYear = now.getMonth() === 0 ? now.getFullYear() - 1 : now.getFullYear();
  if (dateOfExpense.getMonth() === lastMonth && dateOfExpense.getFullYear() === lastYear) {
    return true;
  }
  return false;
}

function isPreviousMonth(expense: Expenses, cb: (amount: number) => void): void {
  const now = new Date();
  const dateOfExpense = new Date(expense.dateOfExpense);
  const day = now.getDate();
  const lastMonth = now.getMonth() === 0 ? 11 : now.getMonth() - 1;
  const lastYear = now.getMonth() === 0 ? now.getFullYear() - 1 : now.getFullYear();

  if (
    dateOfExpense.getMonth() === lastMonth &&
    dateOfExpense.getFullYear() === lastYear &&
    dateOfExpense.getDate() <= day
  ) {
    cb(expense.amount);
  }
}

export { isPreviousMonth, isThisMonth, isThisMonthInc, isPreviousMonthInc };
