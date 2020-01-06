import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '../../assets/logo.svg';
import { ApplicationState } from '../../store/createStore';
import { signInRequest } from '../../store/ducks/auth/actions';

// import { Container } from './styles';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insert a valid email')
    .required('An email is required!'),
  password: Yup.string()
    .min(6, 'At least 6 characters')
    .required('A password is required!'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector((state: ApplicationState) => state.auth.loading);

  function onSubmit(data: any) {
    const { email, password } = data;
    dispatch(signInRequest(email, password));
    console.tron.log(data);
    console.log(data);
  }
  return (
    <>
      <img src={logo} alt="Meetapp" />

      <Form schema={schema} onSubmit={onSubmit}>
        <Input name="email" type="email" placeholder="Insert your email" />
        <Input
          name="password"
          type="password"
          placeholder="Your secret password"
        />
        <button type="submit"> {loading ? 'Loading...' : 'Log in'}</button>
        <Link to="/register">Create free account</Link>
      </Form>
    </>
  );
}
