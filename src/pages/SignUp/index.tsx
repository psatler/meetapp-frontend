import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';
// import { Container } from './styles';

export default function SignUp() {
  return (
    <>
      <img src={logo} alt="Meetapp" />

      <form>
        <input type="text" placeholder="Insert your name" />
        <input type="email" placeholder="Insert your email" />
        <input type="password" placeholder="Your secret password" />
        <button type="submit">Create free account</button>
        <Link to="/">I already have an account</Link>
      </form>
    </>
  );
}
