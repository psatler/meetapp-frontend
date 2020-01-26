import React, { useEffect, useState } from 'react';
import { RouteComponentProps, useParams, Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Form, Input } from '@rocketseat/unform';

import api from '../../services/api';
import { Container, UpperSection } from './styles';

type AllProps = RouteComponentProps;

export default function MeetupDetails({ location }: AllProps) {
  const { id } = useParams();
  const meetupSelected = location.state ? location.state.meetupSelected : null;
  const fromDashboard = location.state ? location.state.fromDashboard : false;
  const [meetup, setMeetup] = useState(meetupSelected || []);

  useEffect(() => {
    async function fetchMeetupById(meetupId: string) {
      try {
        const response = await api.get(`meetups/${meetupId}`);
        setMeetup(response.data);
      } catch (error) {
        toast.error(
          'Something went wrong while fetching the meetup. Try again later!'
        );
      }
    }

    if (!fromDashboard && id) {
      // fetching from backend
      fetchMeetupById(id);
    }
  }, [fromDashboard, id]);

  console.log(location.state);

  return (
    <Container>
      <UpperSection>
        <strong>Meetup de React Native</strong>
        <div>
          <Link to={`/meetup/${id}/edit`}>Edit</Link>
          <button type="button">Delete</button>
        </div>
      </UpperSection>

      {/* <Form initialData={meetup} onSubmit={onSubmit}>
        <ImageINput name="avatar_id" inputId="avatar_id" fieldToGet="avatar" />

        <Input name="name" type="text" placeholder="Insert your name" />
        <Input name="email" type="email" placeholder="Insert your email" />

        <hr />
        <Input
          name="oldPassword"
          type="oldPassword"
          placeholder="Your secret password"
        />
        <Input
          name="password"
          type="password"
          placeholder="Your new password"
        />
        <Input
          name="confirmPassword"
          type="confirmPassword"
          placeholder="Confirm your new password"
        />
        <button type="submit">Save profile changes</button>
      </Form> */}
    </Container>
  );
}
