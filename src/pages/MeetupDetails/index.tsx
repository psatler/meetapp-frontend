import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

// import { Container } from './styles';

type AllProps = RouteComponentProps;

export default function MeetupDetails({ location }: AllProps) {
  console.log(location.state);

  return <div>MeetupDetails</div>;
}
