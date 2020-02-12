import React from 'react';
// import { RouteComponentProps, Redirect, useParams } from 'react-router-dom';

import MeetupForm from '../../components/MeetupForm';
// import { DataResponse } from '../../store/ducks/meetup/types';
import { Container } from '../EditMeetup/styles';

export default function EditMeetup() {
  return (
    <Container>
      {/* <section>
        <strong> {meetup.title} </strong>
      </section> */}

      <MeetupForm newMeetup />
    </Container>
  );
}
