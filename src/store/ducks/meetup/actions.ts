import { action } from 'typesafe-actions';

import {
  DataResponse,
  UpdateMeetupResponse,
  MeetupTypes,
  MeetupActionTypes,
  MeetupFormFields,
} from './types';

export function loadMeetups(meetups: DataResponse[]): MeetupActionTypes {
  return action(MeetupTypes.LOAD_MEETUPS, { meetups });
}

export function updateMeetupRequest(
  meetupFormFields: MeetupFormFields
): MeetupActionTypes {
  return action(MeetupTypes.UPDATE_MEETUP_REQUEST, meetupFormFields);
}

export function updateMeetupSuccess(meetup: DataResponse): MeetupActionTypes {
  return action(MeetupTypes.UPDATE_MEETUP_SUCCESS, meetup);
}

export function updateMeetupFailure() {
  return action(MeetupTypes.UPDATE_MEETUP_FAILURE);
}
