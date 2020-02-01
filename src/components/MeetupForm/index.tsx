import React, { useEffect, useState, useRef } from 'react';
import ReactDatePicker from 'react-datepicker';

import { Input, useField } from '@rocketseat/unform';

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
  console.log('meetupSelected', meetupSelected);

  console.log('selected', selected);
  console.log('fieldName', fieldName);
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
    console.log('data', data);
    return {};
  }

  return (
    <FormContainer initialData={meetupSelected} onSubmit={onSubmit}>
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

      {!disableInputs && <button type="submit">Save meetup changes</button>}
    </FormContainer>
  );
}
