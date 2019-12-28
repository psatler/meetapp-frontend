import React, { ReactType } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

import AuthLayout from '../pages/_layouts/auth';
import DefaultLayout from '../pages/_layouts/default';
import store from '../store';

interface OwnProps {
  isPrivate?: boolean;
  // eslint-disable-next-line
  component: ReactType;
}

type Props = RouteProps & OwnProps;

// creating a wrapper around the Route component of react router dom to manage private routes
export default function RouteWrapper({
  component: Component,
  isPrivate = false,
  ...rest
}: Props) {
  const { loggedIn } = store.getState().auth;
  console.log(loggedIn);

  // if user is not logged in but is trying to access a private route
  if (!loggedIn && isPrivate) {
    return <Redirect to="/" />;
  }

  // if user is logged in but accessing a public page (signin/signup)
  if (loggedIn && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  // choosing which template to use based on if the user is logged in or not
  const Layout = loggedIn ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}
