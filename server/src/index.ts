import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { ApolloServer } from 'apollo-server-express';
import * as express from 'express';
import * as dotenv from 'dotenv';
import * as session from 'express-session';
import resolvers from './resolvers';
import typeDefs from './typeDefs';
import User from './entity/User';

dotenv.config();
const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ req }),
  });

  await createConnection({
    type: 'mongodb',
    url: `mongodb://${process.env.USERNAME}:${process.env.PASSWORD}@${process.env.DATABASE_URL}`,
    useNewUrlParser: true,
    entities: [User],
  });

  const app = express();

  app.use(
    session({
      secret: process.env.SECRET ? process.env.SECRET : 'ABC123',
      saveUninitialized: false,
      resave: false,
    }),
  );
  server.applyMiddleware({
    app,
    cors: {
      credentials: true,
      origin: ['http://localhost:3000', 'http://localhost:4001'],
    },
  });

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`),
  );
};

startServer();
