import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Navigation from '../components/navigation/Navigation';
import AuthRoute from './AuthRoute';
import LandingPage from '../pages/landing/LandingPage';
import LandingTest from '../components/testing/LandingTest';
import LoginPage from '../pages/login/LoginPage';
import RegisterPage from '../pages/register/RegisterPage';

const AppRouter = () => (
  <Router>
    <Switch>
      <Route
        exact
        path="/"
        render={() => (
          <>
            <LandingPage />
          </>
        )}
      />
      <Route exact path="/test" render={() => <LandingTest />} />
      <Route exact path="/login" render={() => <LoginPage />} />
      <Route exact path="/register" render={() => <RegisterPage />} />

      <AuthRoute
        exact
        path="/home"
        render={() => (
          <>
            <Navigation />
          </>
        )}
      />

      <Redirect to="/" />
    </Switch>
  </Router>
);

export default AppRouter;
