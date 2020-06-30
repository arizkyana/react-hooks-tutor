import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import HomePage from './pages/home';
import DashboardPage from './pages/dashboard';
import SigninPage from './pages/signin';
import ProfilePage from './pages/profile';

import Error404 from './pages/error404';

import './App.css';

const App = () => {

  return (
    <Router>
      <Switch>
        <Route exact path="/signin" component={SigninPage} />
        <Route exact path="/dashboard" component={DashboardPage} />
        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/" component={HomePage} />
        <Route component={Error404} />
      </Switch>
    </Router>
  )
};

export default App;