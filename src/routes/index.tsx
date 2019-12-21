import React from 'react';
import { Switch, Route } from 'react-router-dom';

// routes accessed after authorization
import Dashboard from '../pages/Dashboard';
import Details from '../pages/Details';
import NewEdit from '../pages/NewEdit';
import NoMatch from '../pages/NoMatch';
import Profile from '../pages/Profile';
// auth routes
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} />
      <Route path="/details" component={Details} />
      <Route path="/profile" component={Profile} />
      <Route path="/new" component={NewEdit} />

      <Route component={NoMatch} />
    </Switch>
  );
}
