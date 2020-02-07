import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import MeetupForm from '../../components/MeetupForm';
import api from '../../services/api';
import history from '../../services/history';
import { ApplicationState } from '../../store/createStore';
import {
  deleteMeetupSuccess,
  deleteMeetupFailure,
} from '../../store/ducks/meetup/actions';
import { Container, UpperSection } from './styles';

export default function MeetupDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const meetup = useSelector(
    (state: ApplicationState) => state.meetups.meetupsById[Number(id)]
  );

  useEffect(() => {
    if (!meetup) {
      history.push('/dashboard');
    }
  }, [meetup]);

  async function handleDelete() {
    // eslint-disable-next-line
    const willDelete = window.confirm(
      'Are you sure you want to delete this meetup?'
    );

    if (willDelete) {
      try {
        await api.delete(`meetups/${id}`);
        dispatch(deleteMeetupSuccess(Number(id)));
        toast.success(`Meetup ${meetup.title} was deleted!`);
      } catch (error) {
        dispatch(deleteMeetupFailure());
        toast.error(`Meetup ${meetup.title} could not be deleted!`);
      }
    }
  }

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
              <button type="button" onClick={handleDelete}>
                Delete
              </button>
            </div>
          </UpperSection>

          <MeetupForm meetupSelected={meetup} disableInputs />
        </>
      )}
    </Container>
  );
}
