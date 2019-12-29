import { Entity, ObjectIdColumn, ObjectID, Column, BaseEntity } from 'typeorm';
import { Expenses } from './Expenses';

@Entity('users')
export class User extends BaseEntity {
  @ObjectIdColumn()
  id: ObjectID;

  @Column('text')
  email: string;

  @Column('text')
  password: string;

  @Column(() => Expenses)
  expenses: Expenses[];
}
