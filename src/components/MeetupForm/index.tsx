import React, { useEffect, useState, useRef } from 'react';
import ReactDatePicker from 'react-datepicker';
import { toast } from 'react-toastify';

import { Input, useField } from '@rocketseat/unform';
import { format } from 'date-fns';

import api from '../../services/api';
import history from '../../services/history';

import 'react-datepicker/dist/react-datepicker.css';

import { DataResponse } from '../../store/ducks/meetup/types';
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
  // const ref = useRef(null) as React.RefObject<ReactDatePicker>;
  const ref = useRef(null) as React.RefObject<
    ReactDatePicker & HTMLInputElement
  >;
  const { fieldName, registerField } = useField('date');
  const [selected, setSelected] = useState(
    (meetupSelected && new Date(meetupSelected.date)) || new Date()
  );
  const [loading, setLoading] = useState(false);

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

  async function onSubmit(data: any) {
    try {
      setLoading(true);
      const {
        title,
        description,
        location,
        date,
        banner_image_id, // eslint-disable-line @typescript-eslint/camelcase
      } = data;

      const formattedDate = format(
        new Date(date),
        "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"
      );
      // "2020-02-27T21:00:00.000Z",

      console.log('formattedDate', formattedDate);

      const updatedMeetup = {
        title,
        description,
        location,
        date: formattedDate,
        banner_image_id, // eslint-disable-line @typescript-eslint/camelcase
      };
      console.log('updatedMeetup', updatedMeetup);

      await api.put(`meetups/${meetupSelected.id}`, updatedMeetup);
      setLoading(false);
      toast.success(`Meetup '${title}' was updated!`);
      history.goBack();
    } catch (error) {
      console.log('error updatedMeetup', error);
      toast.error(`Meetup was not updated. Try again later!`);
      setLoading(false);
    }
  }

  console.log('loading', loading);

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
