import React from 'react';
import { Switch } from 'react-router-dom';

// routes accessed after authorization
import Dashboard from '../pages/Dashboard';
import Details from '../pages/Details';
import NewEdit from '../pages/NewEdit';
import NoMatch from '../pages/NoMatch';
import Profile from '../pages/Profile';
// auth routes
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Route from './Route'; // importing a wrapper around Route from react-router-dom

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/details" component={Details} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/new" component={NewEdit} isPrivate />

      <Route component={NoMatch} />
    </Switch>
  );
}
