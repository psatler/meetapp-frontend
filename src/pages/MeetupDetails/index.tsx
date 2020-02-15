import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import MeetupForm from '../../components/MeetupForm';
import Modal from '../../components/Modal';
import api from '../../services/api';
import history from '../../services/history';
import { ApplicationState } from '../../store/createStore';
import {
  deleteMeetupSuccess,
  deleteMeetupFailure,
} from '../../store/ducks/meetup/actions';
import { Container, UpperSection } from './styles';

export default function MeetupDetails() {
  const [showModal, setShowModal] = useState(false);
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

  function openModal() {
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }

  async function confirmDeletion() {
    // eslint-disable-next-line
    // const willDelete = window.confirm(
    //   'Are you sure you want to delete this meetup?'
    // );

    try {
      await api.delete(`meetups/${id}`);
      dispatch(deleteMeetupSuccess(Number(id)));
      toast.success(`Meetup ${meetup.title} was deleted!`);
    } catch (error) {
      dispatch(deleteMeetupFailure());
      toast.error(`Meetup ${meetup.title} could not be deleted!`);
    }
  }

  return (
    <>
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
                <button type="button" onClick={openModal}>
                  Delete
                </button>
              </div>
            </UpperSection>

            {/* <MeetupForm meetupSelected={meetup} disableInputs /> */}
            <MeetupForm disableInputs />
          </>
        )}
      </Container>
      <Modal
        showModal={showModal}
        confirm={confirmDeletion}
        dismiss={closeModal}
        title={`Delete ${meetup?.title}?`}
      >
        <strong>
          Are you sure you want to delete the <span> {meetup?.title} </span>
          meetup?
        </strong>
        <span>This is an irreversible action!</span>
      </Modal>
    </>
  );
}
