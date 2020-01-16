import { IResolvers } from 'apollo-server-express';
import { getMongoManager, getMongoRepository } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import * as mongodb from 'mongodb';
import { eachDay, getMonth, getYear, lastDayOfMonth } from 'date-fns';
import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';
import Expenses from './entity/Expenses';
import User from './entity/User';

const resolvers: IResolvers = {
  Query: {
    me: async (_, __, { req }) => {
      if (!req.session.userId) {
        return null;
      }
      const user = await User.findOne(req.session.userId);
      return user;
    },
    getExpenses: async (_, __, { req }) => {
      if (!req.session.userId) {
        return null;
      }
      const now = new Date();
      const first = new Date(getYear(now), getMonth(now), 1);
      const last = lastDayOfMonth(now);
      const days = eachDay(first, last);

      const user = await User.findOne(req.session.userId);
      // eslint-disable-next-line
      const expensesThisMonth: any[] = [];
      if (user) {
        if (user.expenses) {
          user.expenses.forEach(expense => {
            if (
              new Date(expense.dateOfExpense) >= first &&
              new Date(expense.dateOfExpense) <= last
            ) {
              expensesThisMonth.push(expense);
            }
          });
        }
      }
      return {
        daysOfMonth: days,
        expensesThisMonth,
      };
    },
  },
  Mutation: {
    register: async (_, { email, password }, { req }) => {
      const hashedPassword = await bcrypt.hash(password, 10);
      const userRepo = getMongoRepository(User);
      const manager = getMongoManager();
      const checkUser = await userRepo.findOne({
        where: { email },
      });
      if (!checkUser) {
        const user = User.create({ email, password: hashedPassword });
        await manager.save(user);
        req.session.userId = user.id;
        return {
          registered: true,
          user,
        };
      }
      return {
        registered: false,
        user: null,
      };
    },
    login: async (_, { email, password }, { req }) => {
      // TODO: update this logic, make it better, return an object instead
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return {
          user: null,
          reason: 'email',
          error: 'No user with that email address',
        };
      }
      const valid = await bcrypt.compare(password, user.password);
      if (!valid) {
        return {
          user: null,
          reason: 'password',
          error: 'Incorrect password',
        };
      }
      // store user id in the session as cookie
      req.session.userId = user.id;
      return {
        user,
        reason: '',
        error: '',
      };
    },
    logout: async (_, __, { req }) => {
      if (req.session.userId) {
        req.session.destroy();
        return true;
      }
      return false;
    },
    addExpense: async (_, { dateOfExpense, sectorOfExpense, description, amount }, { req }) => {
      if (!req.session.userId) {
        return false;
      }
      const userRepo = getMongoRepository(User);
      const user = await userRepo.findOne({
        where: { _id: new mongodb.ObjectID(req.session.userId) },
      });
      if (user) {
        let { expenses } = user;
        // const id = new mongodb.ObjectID();
        const expense = new Expenses(dateOfExpense, sectorOfExpense, description, amount);
        if (expenses) {
          expenses.push(expense);
        } else {
          expenses = [expense];
        }
        const insert = await userRepo.findOneAndUpdate({ _id: user.id }, { $set: { expenses } });
        if (insert.ok === 1) {
          return true;
        }
      }
      return false;
    },
  },
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    // eslint-disable-next-line
    parseValue(value: any) {
      return new Date(value); // value from the client
    },
    // eslint-disable-next-line
    serialize(value: any) {
      return new Date(value); // value sent to the client
    },
    // eslint-disable-next-line
    parseLiteral(ast: any) {
      if (ast.kind === Kind.INT) {
        return parseInt(ast.value, 10); // ast value is always in string format
      }
      return null;
    },
  }),
};

export default resolvers;
