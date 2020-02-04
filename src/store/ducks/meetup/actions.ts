import { action } from 'typesafe-actions';

import { DataResponse, MeetupTypes, MeetupActionTypes } from './types';

export function loadMeetups(meetups: DataResponse[]): MeetupActionTypes {
  return action(MeetupTypes.LOAD_MEETUPS, { meetups });
}
