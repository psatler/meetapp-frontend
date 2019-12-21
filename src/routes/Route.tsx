import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

interface OwnProps {
  isPrivate?: boolean;
  // component: React.ElementType; // already defined in RouteProps
}

type Props = RouteProps & OwnProps;

// creating a wrapper around the Route component of react router dom to manage private routes
export default function RouteWrapper({
  component: Component,
  isPrivate = false,
  ...rest
}: Props) {
  const loggedIn = false;

  // if user is not logged in but is trying to access a private route
  if (!loggedIn && isPrivate) {
    return <Redirect to="/" />;
  }

  // if user is logged in but accessing a public page (signin/signup)
  if (loggedIn && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  return <Route {...rest} component={Component} />;
}
