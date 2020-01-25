import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import { ApplicationState } from '../../store/createStore';
import { Container, Content, Profile } from './styles';

export default function Header() {
  const profile = useSelector((state: ApplicationState) => state.user.profile);

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
              <strong> {profile?.name} </strong>
              <Link to="/profile">My profile</Link>
            </div>
            <img
              src={
                profile?.avatar.url ||
                'https://api.adorable.io/avatars/50/abott@adorable.png'
              }
              alt={profile?.name || ''}
            />

            <button type="button">Log Out</button>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
