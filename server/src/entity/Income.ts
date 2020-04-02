import { Column } from 'typeorm';
import * as uniqid from 'uniqid';

class Income {
  @Column('string')
  id: string;

  @Column('text')
  date: string;

  @Column('text')
  sector: string;

  @Column('text')
  description: string;

  @Column('float')
  amount: number;

  constructor(date: string, sector: string, description: string, amount: number) {
    this.id = uniqid();
    this.date = date;
    this.sector = sector;
    this.description = description;
    this.amount = amount;
  }
}

export default Income;
