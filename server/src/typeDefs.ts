import { gql } from 'apollo-server-express';

const typeDefs = gql`
  scalar Date

  type User {
    id: ID!
    email: String!
    name: String!
    expenses: [Expense!]
    income: [Income!]
    currency: String!
  }
  type Expense {
    id: ID!
    dateOfExpense: String!
    sectorOfExpense: String!
    description: String!
    amount: Float!
  }
  type Income {
    id: ID!
    date: String!
    sector: String!
    description: String!
    amount: Float!
  }
  type GetExpenses {
    daysOfMonth: [Date!]!
    expensesThisMonth: [Expense!]!
    expensesLastMonth: [Expense!]!
  }
  type GetIncome {
    currency: String!
    income: [Income!]!
    total: Float!
  }
  type IncomeFigures {
    totalThisMonth: Float!
    amountDifference: Float!
    percentageDifference: Float!
  }
  type Query {
    me(id: ID): User
    getExpenses(id: ID): GetExpenses
    getTotalForMonth(id: ID): Float!
    getAmountChange(id: ID): Float!
    getPercentageChange(id: ID): Float!
    getRecentExpenses(first: Int!, id: ID): [Expense!]!
    getIncome: GetIncome
    getIncomeFigures(id: ID): IncomeFigures!
    getTotalIncomeForMonth(id: ID): Float!
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

  input UpdateExpense {
    id: ID!
    dateOfExpense: String!
    sectorOfExpense: String!
    description: String!
    amount: String!
  }
  type Mutation {
    register(email: String!, password: String!, name: String!, currency: String!): Register!
    login(email: String!, password: String!): LoginResult
    updateExpenses(updatedExpenses: [UpdateExpense!]!): Boolean!
    addExpense(
      dateOfExpense: String
      sectorOfExpense: String
      description: String
      amount: Float
    ): Boolean!
    addIncome(date: String, sector: String, description: String, amount: Float): Boolean!
    logout: Boolean!
  }
`;

export default typeDefs;
