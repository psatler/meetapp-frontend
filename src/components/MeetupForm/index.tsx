import React, { useEffect, useState, useRef } from 'react';
import ReactDatePicker from 'react-datepicker';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Input, useField } from '@rocketseat/unform';
import { format } from 'date-fns';

import api from '../../services/api';
import history from '../../services/history';

import 'react-datepicker/dist/react-datepicker.css';

import { ApplicationState } from '../../store/createStore';
import { updateMeetupRequest } from '../../store/ducks/meetup/actions';
import { DataResponse, MeetupFormFields } from '../../store/ducks/meetup/types';
import ImageInput from '../ImageInput';

// import * as Yup from 'yup';

import { FormContainer, TextArea } from './styles';

interface OwnProps {
  meetupSelected: DataResponse;
  disableInputs?: boolean;
}

export default function MeetupForm({
  meetupSelected,
  disableInputs,
}: OwnProps) {
  const { id } = useParams();
  const dispatch = useDispatch();
  // const ref = useRef(null) as React.RefObject<ReactDatePicker>;
  const ref = useRef(null) as React.RefObject<
    ReactDatePicker & HTMLInputElement
  >;
  const { fieldName, registerField } = useField('date');

  const meetup = useSelector(
    (state: ApplicationState) => state.meetups.meetupsById[Number(id)]
  );
  const loading = useSelector(
    (state: ApplicationState) => state.meetups.loading
  );

  const [selected, setSelected] = useState(
    (meetup && new Date(meetup.date)) || new Date()
  );

  useEffect(() => {
    if (!meetup) {
      history.push('/dashboard');
    }
  }, [meetup]);

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: fieldName,
        ref: ref.current,
        path: 'props.selected',
        clearValue: (pickerRef: any) => {
          pickerRef.clear();
        },
      });
    }
  }, [ref.current, fieldName]); // eslint-disable-line

  function onSubmit(data: any) {
    const meetupFormInputs: MeetupFormFields = {
      ...data,
      meetupId: id,
    };
    dispatch(updateMeetupRequest(meetupFormInputs));
  }

  return (
    <FormContainer
      initialData={meetupSelected}
      onSubmit={onSubmit}
      loading={loading}
    >
      <ImageInput
        name="banner_image_id"
        inputId="banner_image_id"
        fieldToGet="banner"
        isMeetupBanner
        disableInputs={disableInputs}
      />

      <Input
        name="title"
        type="text"
        placeholder="Meetup title"
        disabled={disableInputs}
      />
      <TextArea
        multiline
        name="description"
        placeholder="Complete description about the meetup"
        disabled={disableInputs}
      />

      <ReactDatePicker
        name="datePicker"
        selected={selected}
        onChange={(date: Date) => setSelected(date)}
        ref={ref}
        disabled={disableInputs}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        timeCaption="time"
        dateFormat="MMMM dd, yyyy HH:mm"
      />
      <Input
        name={fieldName}
        type="text"
        value={String(selected)}
        hidden
        readOnly
      />
      <Input
        name="location"
        type="type"
        placeholder="Location of the event"
        disabled={disableInputs}
      />

      {!disableInputs && (
        <button type="submit">
          {loading ? 'Saving changes...' : 'Save meetup changes'}{' '}
        </button>
      )}
    </FormContainer>
  );
}
