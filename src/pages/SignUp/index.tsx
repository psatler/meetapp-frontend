import React from 'react';
import { Link } from 'react-router-dom';

import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '../../assets/logo.svg';
// import { Container } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Insert a valid email')
    .required('An email is required!'),
  password: Yup.string()
    .min(6, 'At least 6 characters')
    .required('A password is required!'),
});

export default function SignUp() {
  function onSubmit(data: any) {
    console.tron.log(data);
    console.log('signUp', data);
  }
  return (
    <>
      <img src={logo} alt="Meetapp" />

      <Form schema={schema} onSubmit={onSubmit}>
        <Input name="name" type="text" placeholder="Insert your name" />
        <Input name="email" type="email" placeholder="Insert your email" />
        <Input
          name="password"
          type="password"
          placeholder="Your secret password"
        />
        <button type="submit">Create free account</button>
        <Link to="/">I already have an account</Link>
      </Form>
    </>
  );
}
