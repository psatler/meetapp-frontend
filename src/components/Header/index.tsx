import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import { ApplicationState } from '../../store/createStore';
import { signOutRequest } from '../../store/ducks/auth/actions';
import { Container, Content, Profile } from './styles';

export default function Header() {
  const dispatch = useDispatch();
  const profile = useSelector((state: ApplicationState) => state.user.profile);

  function handleLogOut() {
    dispatch(signOutRequest());
  }

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
                profile?.avatar?.url ||
                'https://api.adorable.io/avatars/50/abott@adorable.png'
              }
              alt={profile?.name || ''}
            />

            <button type="button" onClick={handleLogOut}>
              Log Out
            </button>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
