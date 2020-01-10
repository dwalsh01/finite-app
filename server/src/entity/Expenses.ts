import { Column } from 'typeorm';
import * as uniqid from 'uniqid';

class Expenses {
  @Column('string')
  id: string;

  @Column('text')
  dateOfExpense: string;

  @Column('text')
  sectorOfExpense: string;

  @Column('text')
  description: string;

  @Column('float')
  amount: number;

  constructor(dateOfExpense: string, sectorOfExpense: string, description: string, amount: number) {
    this.id = uniqid();
    this.dateOfExpense = dateOfExpense;
    this.sectorOfExpense = sectorOfExpense;
    this.description = description;
    this.amount = amount;
  }
}

export default Expenses;
