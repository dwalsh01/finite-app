import React from 'react';
import DatePicker from './DatePicker';

interface SelectedTypeProps {
  setSelectedType: React.Dispatch<React.SetStateAction<string>>;
  selectedType: string;
}
const DateRange: React.FC = () => (
  <div className="w-full px-2 mt-2 mb-2">
    {/* <DatePicker /> */}
    {/* <label */}
    {/*  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" */}
    {/*  htmlFor="dateOfExpense" */}
    {/* > */}
    {/*  Date Of Expense */}
    {/*  <input */}
    {/*    className="w-full px-3 py-2 mb-3 bg-gray-200 text-sm leading-tight border rounded shadow appearance-none focus:outline-none focus:shadow-outline" */}
    {/*    id="dateOfExpense" */}
    {/*    type="date" */}
    {/*    value={new Date().toString()} */}
    {/*    onChange={event => console.log(event.target.value)} */}
    {/*  /> */}
    {/* </label> */}
  </div>
);

export default DateRange;
