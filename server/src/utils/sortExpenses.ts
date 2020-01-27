import Expenses from '../entity/Expenses';

function sortExpenses(expenses: Expenses[]) {
  return expenses.sort((a: Expenses, b) => {
    return new Date(a.dateOfExpense).getTime() - new Date(b.dateOfExpense).getTime();
  });
}

export default sortExpenses;
