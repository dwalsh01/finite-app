import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import Navigation from '../../components/navigation/Navigation';
import GET_ALL_EXPENSES from '../../graphql/GetAllExpenses';
import { GetExpenses } from '../../types/GetExpenses';
import CardFull from '../../components/card/CardFull';

const ViewExpensesPage: React.FC = () => {
  const { data, loading } = useQuery<GetExpenses>(GET_ALL_EXPENSES);
  if (loading) {
    return null;
  }
  return (
    <div className="container mx-auto lg:px-8">
      <Navigation />
      {!data?.me?.expenses ? (
        <h1 className="text-xl font-bold">View Expenses</h1>
      ) : (
        <>
          <h1 className="text-xl font-bold">We got expenses</h1>
          {/* <div className="flex flex-col items-center justify-center"> */}
          <div className="flex flex-wrap justify-center">
            {data.me.expenses.map(expense => {
              console.log(expense);
              return <CardFull key={expense.id} {...expense} />;
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default ViewExpensesPage;
