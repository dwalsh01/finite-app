// import gql from 'graphql-tag';

const GET_USER_INFORMATION = `
  query GetUserInfo($id: ID) {
    me(id: $id) {
      id
      email
    }
  }
`;

export default GET_USER_INFORMATION;
