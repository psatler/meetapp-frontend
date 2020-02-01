import React, { useEffect, useState } from 'react';
import { RouteComponentProps, useParams, Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import MeetupForm from '../../components/MeetupForm';
import api from '../../services/api';
import { DataResponse } from '../../store/ducks/meetup/types';
import { Container, UpperSection } from './styles';

type AllProps = RouteComponentProps;

export default function MeetupDetails({ location }: AllProps) {
  const { id } = useParams();
  const meetupSelected = location.state ? location.state.meetupSelected : null;
  const fromDashboard = location.state ? location.state.fromDashboard : false;
  const [meetup, setMeetup] = useState<DataResponse>(meetupSelected || null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMeetupById(meetupId: string) {
      try {
        const response = await api.get(`meetups/${meetupId}`);
        setMeetup(response.data);
        setLoading(false);
      } catch (err) {
        setError(true);
        setLoading(false);
        toast.error(
          'Something went wrong while fetching the meetup. Try again later!'
        );
      }
    }

    if (!fromDashboard && id) {
      // fetching from backend
      fetchMeetupById(id);
    } else {
      setLoading(false);
    }
  }, [fromDashboard, id]);

  return (
    <Container>
      {meetup && (
        <>
          <UpperSection>
            <strong>Meetup de React Native</strong>
            <div>
              <Link to={`/meetup/${id}/edit`}>Edit</Link>
              <button type="button">Delete</button>
            </div>
          </UpperSection>

          <MeetupForm meetupSelected={meetup} />
        </>
      )}

      {loading && <h2>Loading...</h2>}

      {error && (
        <>
          <h2>Meetup not found!</h2>
          <strong>Try again with a different ID</strong>
        </>
      )}
    </Container>
  );
}
