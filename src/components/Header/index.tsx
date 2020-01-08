import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard">
            <img src={logo} alt="Meetapp" />
          </Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Pablo Satler</strong>
              <Link to="/profile">My profile</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Pablo Satler"
            />

            <button type="button">Log Out</button>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
