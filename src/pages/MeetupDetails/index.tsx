import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

import MeetupForm from '../../components/MeetupForm';
import history from '../../services/history';
import { ApplicationState } from '../../store/createStore';
import { Container, UpperSection } from './styles';

export default function MeetupDetails() {
  const { id } = useParams();
  const meetup = useSelector(
    (state: ApplicationState) => state.meetups.meetupsById[Number(id)]
  );

  useEffect(() => {
    if (!meetup) {
      history.push('/dashboard');
    }
  }, [meetup]);

  console.log('id', id);
  console.log('meetup', meetup);

  return (
    <Container>
      {meetup && (
        <>
          <UpperSection>
            <strong>{meetup.title}</strong>
            <div>
              <Link
                to={{
                  pathname: `/meetup/${id}/edit`,
                  state: {
                    meetupToEdit: meetup,
                  },
                }}
              >
                Edit
              </Link>
              <button type="button">Delete</button>
            </div>
          </UpperSection>

          <MeetupForm meetupSelected={meetup} disableInputs />
        </>
      )}
    </Container>
  );
}
