import express from 'express';
import { createConnection } from 'typeorm';
import * as dotenv from 'dotenv';
import runCronJobs from './cronJobs';
import User from './entity/User';
import { testingFunction } from './jobs';

const startServer = async () => {
  dotenv.config();
  await createConnection({
    type: 'mongodb',
    url: `mongodb://${process.env.USERNAME}:${process.env.PASSWORD}@${process.env.DATABASE_URL}`,
    entities: [User],
    useUnifiedTopology: true,
  });
  runCronJobs();
  testingFunction();
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded());
  app.use((_, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
  app.listen(4001, () => {
    console.log('📅  CRON-FINITE  📅\nRunning on http://localhost:4001/ \n');
  });
};

startServer();
