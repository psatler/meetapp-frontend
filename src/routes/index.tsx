import React from 'react';
import { Switch } from 'react-router-dom';

// routes accessed after authorization
import Dashboard from '../pages/Dashboard';
import EditMeetup from '../pages/EditMeetup';
import MeetupDetails from '../pages/MeetupDetails';
import NewMeetup from '../pages/NewMeetup';
import NoMatch from '../pages/NoMatch';
import Profile from '../pages/Profile';
// auth routes
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Route from './Route'; // importing a wrapper around Route from react-router-dom

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/new" component={NewMeetup} isPrivate />
      <Route exact path="/meetup/:id" component={MeetupDetails} isPrivate />
      <Route path="/meetup/:id/edit" component={EditMeetup} isPrivate />

      <Route component={NoMatch} />
    </Switch>
  );
}
