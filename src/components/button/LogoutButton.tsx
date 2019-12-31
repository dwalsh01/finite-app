import React from 'react';
import { useQuery, useMutation, useApolloClient } from '@apollo/react-hooks';
import { useHistory } from 'react-router';
import ME_QUERY from '../../graphql/GetUser';
import { MeQuery } from '../../types/MeQuery';
import { LogoutMutation } from '../../types/LogoutMutation';
import LOGOUT from '../../graphql/Logout';
import Button from './Button';

const LogoutButtonCheck: React.FC = () => {
  const { data, loading } = useQuery<MeQuery>(ME_QUERY);
  const [mutate] = useMutation<LogoutMutation>(LOGOUT);
  const client = useApolloClient();
  const history = useHistory();

  const userCheck = () => {
    if (loading) {
      return null;
    }
    if (data?.me) {
      return (
        <Button
          primary
          onClick={async () => {
            console.log('click');
            await mutate();
            await client.resetStore();
            history.push('/');
          }}
        >
          Logout
        </Button>
      );
    }
    return (
      <>
        <Button to="/register">Sign Up</Button>
        <Button primary to="/login">
          Sign In
        </Button>
      </>
    );
  };
  return userCheck();
};

export default LogoutButtonCheck;
