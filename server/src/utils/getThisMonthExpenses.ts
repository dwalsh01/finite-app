import Expenses from '../entity/Expenses';

function isThisMonth(expense: Expenses, cb: (amount: number) => void): void {
  const now = new Date();
  const dateOfExpense = new Date(expense.dateOfExpense);
  if (
    dateOfExpense.getMonth() === now.getMonth() &&
    dateOfExpense.getFullYear() === now.getFullYear()
  ) {
    cb(expense.amount);
  }
}

function isPreviousMonth(expense: Expenses, cb: (amount: number) => void): void {
  const now = new Date();
  const dateOfExpense = new Date(expense.dateOfExpense);
  const lastMonth = now.getMonth() === 0 ? 11 : now.getMonth() - 1;
  const lastYear = now.getMonth() === 0 ? now.getFullYear() - 1 : now.getFullYear();
  if (dateOfExpense.getMonth() === lastMonth && dateOfExpense.getFullYear() === lastYear) {
    cb(expense.amount);
  }
}
export { isPreviousMonth, isThisMonth };
