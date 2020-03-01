import { getMongoManager } from 'typeorm';
import User from '../entity/User';
import { createMailOptions, transporter } from '../email';
import apolloFetch from '../gql/createFetch';
import GET_USER_INFORMATION from '../gql';

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

export const sendEmailToUsers = async () => {
  const users = await getAllUsers();
  if (users) {
    users.forEach(user => {
      const me = user.email === 'daraghwalsh97@gmail.com';
      if (me) {
        transporter.sendMail(createMailOptions(user.email), (err, info) => {
          if (err) {
            console.log(err);
          }
          console.log(`info: `, info);
        });
      }
    });
  }
};
export const apolloFetchExample = async () => {
  const users = await getAllUsers();
  if (users) {
    users.forEach(user => {
      const me = user.email === 'daraghwalsh97@gmail.com';
      if (me) {
        apolloFetch({ query: GET_USER_INFORMATION, variables: { id: user.id } }).then(result => {
          const { data, errors } = result;
          console.log(data, errors);
        });
      }
    });
  }
};

export const testingFunction = async () => {
  sendEmailToUsers();
};

export default getUser;
