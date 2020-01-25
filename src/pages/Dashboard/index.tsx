import React from 'react';

import { Container, UpperSection, Meetup } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <UpperSection>
        <strong>My meetups</strong>
        <button type="button">New Meetup</button>
      </UpperSection>

      <ul>
        <Meetup past>
          <strong>React Native meetup</strong>
          <span>March 3rd at 20h</span>
        </Meetup>
        <Meetup>
          <strong>React Native meetup</strong>
          <span>March 3rd atdasd asdasdfasdfasfsd 20h</span>
        </Meetup>
        <Meetup past>
          <strong>React Native meetup</strong>
          <span>March 3rd at 20h</span>
        </Meetup>
        <Meetup>
          <strong>React Native meetup</strong>
          <span>March 3rd at 20h</span>
        </Meetup>
        <Meetup>
          <strong>React Native meetup</strong>
          <span>March 3rd at 20h</span>
        </Meetup>
        <Meetup>
          <strong>React Native meetup</strong>
          <span>March 3rd at 20h</span>
        </Meetup>
      </ul>
    </Container>
  );
}
