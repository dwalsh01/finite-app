import { gql } from 'apollo-server-express';

const typeDefs = gql`
  scalar Date

  type User {
    id: ID!
    email: String!
    name: String!
    expenses: [Expense!]
    currency: String!
  }
  type Expense {
    id: ID!
    dateOfExpense: String!
    sectorOfExpense: String!
    description: String!
    amount: Float!
  }
  type GetExpenses {
    daysOfMonth: [Date!]!
    expensesThisMonth: [Expense!]!
    expensesLastMonth: [Expense!]!
  }

  type Query {
    me(id: ID): User
    getExpenses(id: ID): GetExpenses
    getTotalForMonth(id: ID): Float!
    getAmountChange(id: ID): Float!
    getPercentageChange(id: ID): Float!
    getRecentExpenses(first: Int!, id: ID): [Expense!]!
  }

  type Register {
    registered: Boolean!
    user: User
  }

  type LoginResult {
    user: User
    error: String!
    reason: String!
  }
  type Mutation {
    register(email: String!, password: String!, name: String!, currency: String!): Register!
    login(email: String!, password: String!): LoginResult
    addExpense(
      dateOfExpense: String
      sectorOfExpense: String
      description: String
      amount: Float
    ): Boolean!
    logout: Boolean!
  }
`;

export default typeDefs;
