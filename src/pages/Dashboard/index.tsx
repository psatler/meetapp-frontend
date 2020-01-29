import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { format, parseISO } from 'date-fns';

import api from '../../services/api';
import history from '../../services/history';
// import { UserInfo } from '../../store/ducks/user/types';
import { DataResponse } from '../../store/ducks/meetup/types';
import { Container, UpperSection, Meetup } from './styles';

export default function Dashboard() {
  const [meetupList, setMeetupList] = useState<DataResponse[]>([]);

  useEffect(() => {
    async function fetchOrganizerMeetups() {
      const response = await api.get('organizer');

      const meetups: DataResponse[] = response.data;

      const formattedMeetups = meetups.map(item => {
        const dateFormatted = format(parseISO(item.date), "MMMM dd 'at' HH:mm");
        return {
          ...item,
          dateFormatted,
        };
      });

      setMeetupList(formattedMeetups);
    }

    fetchOrganizerMeetups();
  }, []);

  function goToMeetupDetailsPage(meetupSelected: DataResponse) {
    history.push(`/meetup/${meetupSelected.id}`, {
      meetupSelected,
      fromDashboard: true,
    });
  }

  return (
    <Container>
      <UpperSection>
        <strong>My meetups</strong>
        <Link to="/new">New Meetup</Link>
      </UpperSection>

      <ul>
        {meetupList.map(meetup => (
          <Meetup
            key={meetup.id}
            past={meetup.past}
            onClick={() => goToMeetupDetailsPage(meetup)}
          >
            <strong> {meetup.title} </strong>
            <span> {meetup.dateFormatted} </span>
          </Meetup>
        ))}
      </ul>
    </Container>
  );
}
