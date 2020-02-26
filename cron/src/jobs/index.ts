import { getMongoManager } from 'typeorm';
import User from '../entity/User';
import { createMailOptions, transporter } from '../email';

const getUser = async () => {
  const manager = getMongoManager();
  return manager.findOne(User, { email: 'daraghwalsh97@gmail.com' });
};
export const getAllUsers = async () => {
  const manager = getMongoManager();
  const users = await manager.find(User, {});
  if (users) {
    return users;
  }
  return null;
};

const sendEmailToUsers = async () => {
  const users = await getAllUsers();
  if (users) {
    users.forEach(user => {
      const me = user.email === 'daraghwalsh97@gmail.com';
      if (me) {
        transporter.sendMail(createMailOptions(user.email), (err, info) => {
          if (err) {
            console.log(err);
          }
          console.log(`old: `, info);
        });
      }
    });
  }
};
export const testingFunction = () => {
  sendEmailToUsers();
};

export default getUser;
