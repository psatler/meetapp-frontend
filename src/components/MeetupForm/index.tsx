import React from 'react';

import { Input } from '@rocketseat/unform';

import ImageInput from '../ImageInput';
// import * as Yup from 'yup';

import { FormContainer } from './styles';

export default function MeetupForm() {
  function onSubmit() {
    return {};
  }

  return (
    <FormContainer initialData={{}} onSubmit={onSubmit}>
      <ImageInput
        name="banner_image_id"
        inputId="banner_image_id"
        fieldToGet="avatar"
      />

      <Input name="name" type="text" placeholder="Insert your name" />
      <Input name="email" type="email" placeholder="Insert your email" />

      <hr />
      <Input
        name="oldPassword"
        type="oldPassword"
        placeholder="Your secret password"
      />
      <Input name="password" type="password" placeholder="Your new password" />
      <Input
        name="confirmPassword"
        type="confirmPassword"
        placeholder="Confirm your new password"
      />
      <button type="submit">Save meetup changes</button>
    </FormContainer>
  );
}
