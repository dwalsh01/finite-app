import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import AuthRoute from './AuthRoute';
import LoginPage from '../pages/login/LoginPage';
import RegisterPage from '../pages/register/RegisterPage';
import LandingPage from '../pages/landing/LandingPage';
import HomePage from '../pages/home/HomePage';
import AddExpensesPage from '../pages/expenses/AddExpensesPage';

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/register" component={RegisterPage} />
      <Route exact path="/addExpense" component={AddExpensesPage} />
      <AuthRoute exact path="/home" component={HomePage} />
      <Redirect to="/" />
    </Switch>
  </Router>
);

export default AppRouter;
