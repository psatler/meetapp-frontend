import React from 'react';

import { Container, UpperSection, MeetupsList } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <UpperSection>
        <strong>My meetups</strong>
        <button type="button">New Meetup</button>
      </UpperSection>

      <MeetupsList>
        <li>
          <strong>React Native meetup</strong>
          <span>March 3rd at 20h</span>
        </li>
        <li>
          <strong>React Native meetup</strong>
          <span>March 3rd atdasd asdasdfasdfasfsd 20h</span>
        </li>
        <li>
          <strong>React Native meetup</strong>
          <span>March 3rd at 20h</span>
        </li>
        <li>
          <strong>React Native meetup</strong>
          <span>March 3rd at 20h</span>
        </li>
        <li>
          <strong>React Native meetup</strong>
          <span>March 3rd at 20h</span>
        </li>
        <li>
          <strong>React Native meetup</strong>
          <span>March 3rd at 20h</span>
        </li>
      </MeetupsList>
    </Container>
  );
}
