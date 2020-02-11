import React from 'react';
import { useQuery, useMutation, useApolloClient } from '@apollo/react-hooks';
import { useHistory } from 'react-router';
import ME_QUERY from '../../graphql/GetUser';
import { MeQuery } from '../../types/MeQuery';
import { LogoutMutation } from '../../types/LogoutMutation';
import LOGOUT from '../../graphql/Logout';

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
        <button
          type="button"
          // className="bg-green-200 hover:bg-green-300 rounded uppercase text-green-700 p-2 mx-2"
          className="p-2 mx-2 bg-green-200 hover:bg-green-300 text-green-700 rounded uppercase"
          onClick={async () => {
            await mutate();
            await client.resetStore();
            history.push('/');
          }}
        >
          Logout
        </button>
      );
    }
    return null;
  };
  return userCheck();
};

export default LogoutButtonCheck;
