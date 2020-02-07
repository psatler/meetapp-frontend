import { action } from 'typesafe-actions';

import {
  DataResponse,
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

export function updateMeetupFailure(): MeetupActionTypes {
  return action(MeetupTypes.UPDATE_MEETUP_FAILURE);
}

export function deleteMeetupRequest(): MeetupActionTypes {
  return action(MeetupTypes.DELETE_MEETUP_REQUEST);
}

export function deleteMeetupSuccess(id: number): MeetupActionTypes {
  return action(MeetupTypes.DELETE_MEETUP_SUCCESS, { id });
}

export function deleteMeetupFailure(): MeetupActionTypes {
  return action(MeetupTypes.DELETE_MEETUP_FAILURE);
}
