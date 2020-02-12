import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Form, Input } from '@rocketseat/unform';
// import * as Yup from 'yup';

import ImageInput from '../../components/ImageInput';
import { ApplicationState } from '../../store/createStore';
import { updateProfileRequest } from '../../store/ducks/user/actions';
import { Container } from './styles';

// const schema = Yup.object().shape({
//   name: Yup.string().required('Name is required'),
//   email: Yup.string()
//     .email('Insert a valid email')
//     .required('An email is required!'),
//   password: Yup.string()
//     .min(6, 'At least 6 characters')
//     .required('A password is required!'),
// });

export default function Profile() {
  const dispatch = useDispatch();

  const profile = useSelector(
    (state: ApplicationState) => state.user.profile
  ) as object;

  function onSubmit(data: any) {
    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={onSubmit}>
        <ImageInput name="avatar_id" inputId="avatar_id" fieldToGet="avatar" />

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
      </Form>
    </Container>
  );
}
