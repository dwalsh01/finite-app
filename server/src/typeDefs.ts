import { gql } from 'apollo-server-express';

const typeDefs = gql`
  scalar Date

  type User {
    id: ID!
    email: String!
    expenses: [Expense!]
  }
  type Expense {
    id: ID
    dateOfExpense: String!
    sectorOfExpense: String!
    description: String!
    amount: Float!
  }
  type GetExpenses {
    daysOfMonth: [Date!]!
    expensesThisMonth: [Expense!]!
  }
  type Query {
    me: User
    getExpenses: GetExpenses
  }
  type Register {
    registered: Boolean!
    user: User
  }
  type Mutation {
    register(email: String!, password: String!): Register!
    login(email: String!, password: String!): User
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
