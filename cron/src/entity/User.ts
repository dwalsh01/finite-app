import { Entity, ObjectIdColumn, ObjectID, Column, BaseEntity } from 'typeorm';
import Expenses from './Expenses';

@Entity('users')
class User extends BaseEntity {
  @ObjectIdColumn()
  id: ObjectID;

  @Column('text')
  email: string;

  @Column('text')
  name: string;

  @Column('text')
  currency: string;

  @Column('text')
  password: string;

  @Column(() => Expenses)
  expenses: Expenses[];

  constructor(
    id: ObjectID,
    email: string,
    name: string,
    currency: string,
    password: string,
    expenses: Expenses[],
  ) {
    super();
    this.id = id;
    this.email = email;
    this.name = name;
    this.currency = currency;
    this.password = password;
    this.expenses = expenses;
  }
}

export default User;
