import React from 'react';
import IncomeForMonth from './IncomeForMonth';
import IncomeAmountChange from './IncomeAmountChange';
import IncomeSinceLastMonth from './IncomeSinceLastMonth';
import { Display } from '../overview/Overview';

const IncomeTrends: React.FC = () => (
  <Display.Container heading="Income Trends">
    <Display.KPISection>
      <IncomeForMonth />
      <IncomeAmountChange />
      <IncomeSinceLastMonth />
    </Display.KPISection>
  </Display.Container>
);

export default IncomeTrends;
