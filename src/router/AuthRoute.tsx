import React from 'react';
import { RouteProps, Route, RouteComponentProps, Redirect } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import ME_QUERY from '../queries/GetUser';

const AuthRoute: React.FC<RouteProps> = ({ component, ...rest }: RouteProps) => {
  const { data, loading } = useQuery(ME_QUERY);
  const renderFunc = (routeProps: RouteComponentProps<{}>) => {
    if (!data || loading) {
      return null;
    }
    if (!data.me) {
      return <Redirect to="/auth/login" />;
    }
    // eslint-disable-next-line
    const Component = component as React.ComponentType<any>;

    return <Component {...routeProps} />;
  };
  return <Route {...rest} render={renderFunc} />;
};
export default AuthRoute;
