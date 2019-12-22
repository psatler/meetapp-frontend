import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';
// import { Container } from './styles';

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="Meetapp" />

      <form>
        <input type="email" placeholder="Insert your email" />
        <input type="password" placeholder="Your secret password" />
        <button type="submit">Log in</button>
        <Link to="/register">Create free account</Link>
      </form>
    </>
  );
}
