import React from 'react';
import AddExpenseForm from '../../components/expenses/AddExpenseForm';

const AddExpensesPage: React.FC = () => (
  <div className="overflow-hidden flex items-center justify-center">
    <div className="h-screen w-screen bg-gray-400">
      <div className="container mx-auto">
        <div className="flex justify-center px-6 my-12">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
            <AddExpenseForm />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AddExpensesPage;
