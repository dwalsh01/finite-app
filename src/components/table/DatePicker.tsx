import React from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';

export interface DateType {
  startDate: Date;
  endDate: Date;
}

interface DatePickerProps {
  setFilteredDates: React.Dispatch<React.SetStateAction<DateType>>;
  filteredDates: DateType;
}

const DatePicker: React.FC<DatePickerProps> = ({ setFilteredDates, filteredDates }) => {
  const handleSelect = (ranges: any) => {
    const {
      selection: { key, ...rest },
    } = ranges;
    console.log(rest);
    setFilteredDates({ ...rest });
  };

  return (
    <DateRangePicker onChange={handleSelect} ranges={[{ ...filteredDates, key: 'selection' }]} />
  );
};

export default DatePicker;
