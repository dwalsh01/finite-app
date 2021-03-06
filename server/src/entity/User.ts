import { Entity, ObjectIdColumn, ObjectID, Column, BaseEntity } from 'typeorm';
import Expenses from './Expenses';
import Income from './Income';

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

  @Column(() => Income)
  income: Income[];
}

export default User;
