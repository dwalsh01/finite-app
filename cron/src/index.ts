import express from 'express';
import runCronJobs from './cronJobs';

runCronJobs();
// Create a new express application instance
const app: express.Application = express();

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

app.listen(4001, () => {
  console.log('📅  CRON-FINITE  📅\nRunning on http://localhost:4001/ \n');
});
