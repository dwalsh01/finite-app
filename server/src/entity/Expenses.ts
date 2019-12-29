import { Column } from 'typeorm';
// import * as uniqid from 'uniqid';

export class Expenses {
  @Column('text')
  dateOfExpense: string;

  @Column('text')
  sectorOfExpense: string;

  @Column('text')
  description: string;

  @Column('float')
  amount: number;

  constructor(dateOfExpense: string, sectorOfExpense: string, description: string, amount: number) {
    this.dateOfExpense = dateOfExpense;
    this.sectorOfExpense = sectorOfExpense;
    this.description = description;
    this.amount = amount;
  }
}
