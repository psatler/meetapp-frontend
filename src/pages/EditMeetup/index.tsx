import React from 'react';
import { RouteComponentProps, Redirect, useParams } from 'react-router-dom';

import MeetupForm from '../../components/MeetupForm';
import { DataResponse } from '../../store/ducks/meetup/types';
import { Container } from './styles';

export default function EditMeetup({ location }: RouteComponentProps) {
  const { id } = useParams();
  const meetup: DataResponse = location.state?.meetupToEdit;

  if (!meetup) {
    return <Redirect to={`/meetup/${id}`} />;
  }

  return (
    <Container>
      <section>
        <strong> {meetup.title} </strong>
      </section>

      {/* <MeetupForm meetupSelected={meetup} /> */}
      <MeetupForm />
    </Container>
  );
}
