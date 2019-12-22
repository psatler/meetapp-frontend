import React from 'react';
import { Link } from 'react-router-dom';

import { Form, Input } from '@rocketseat/unform';

import logo from '../../assets/logo.svg';
// import { Container } from './styles';

export default function SignIn() {
  function onSubmit(data: any) {
    console.tron.log(data);
    console.log(data);
  }
  return (
    <>
      <img src={logo} alt="Meetapp" />

      <Form onSubmit={onSubmit}>
        <Input name="email" type="email" placeholder="Insert your email" />
        <Input
          name="password"
          type="password"
          placeholder="Your secret password"
        />
        <button type="submit">Log in</button>
        <Link to="/register">Create free account</Link>
      </Form>
    </>
  );
}
