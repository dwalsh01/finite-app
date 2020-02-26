import * as cron from 'node-cron';
// import getUser from './jobs/index';

function runCronJobs() {
  cron.schedule('* * * * *', () => {
    // getUser();
  });
}

export default runCronJobs;
