import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import AuthRoute from './AuthRoute';
import LoginPage from '../pages/login/LoginPage';
import RegisterPage from '../pages/register/RegisterPage';
import LandingPage from '../pages/landing/LandingPage';
import HomePage from '../pages/home/HomePage';
import HelpPage from '../pages/help/HelpPage';
import ViewExpensesPage from '../pages/expenses/ViewExpensesPage';
import ServicesPage from '../pages/services/ServicesPage';
import AccountPage from '../pages/account/AccountPage';

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/services" component={ServicesPage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/register" component={RegisterPage} />
      <AuthRoute exact path="/expenses" component={ViewExpensesPage} />
      <AuthRoute exact path="/me" component={AccountPage} />
      <AuthRoute exact path="/help" component={HelpPage} />
      <AuthRoute exact path="/home" component={HomePage} />
      <Redirect to="/" />
    </Switch>
  </Router>
);

export default AppRouter;
