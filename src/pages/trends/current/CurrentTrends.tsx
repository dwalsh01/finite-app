import React from 'react';
import AmountSpent from './AmountSpent';
import AmountChange from './AmountChange';
import SinceLastMonth from './SinceLastMonth';
import { Display } from '../../../components/overview/Overview';

export const splitAmount = (value: number) => {
  const integer = Math.floor(value);
  const decimal = +(value % 1).toFixed(2) * 100;
  return { integer: Math.abs(integer), decimal: Math.abs(decimal) };
};

const CurrentTrends: React.FC = () => (
  <Display.Container heading="Expenses Trends">
    <Display.KPISection>
      <AmountSpent />
      <AmountChange />
      <SinceLastMonth />
    </Display.KPISection>
  </Display.Container>
);

export default CurrentTrends;
