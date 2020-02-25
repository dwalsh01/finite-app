import * as cron from 'node-cron';

function runCronJobs() {
  cron.schedule('* * * * *', () => {
    console.log(`running every minute`);
  });
}

export default runCronJobs;
