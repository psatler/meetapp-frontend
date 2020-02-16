import { toast } from 'react-toastify';

import { AxiosResponse } from 'axios';
import { format, parseISO } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';
import {
  updateMeetupSuccess,
  updateMeetupFailure,
  createMeetupSuccess,
  createMeetupFailure,
} from './actions';
import {
  MeetupTypes,
  UpdateMeetupRequestAction,
  CreateMeetupRequestAction,
  DataResponse,
  MeetupFormFields,
} from './types';

// getting the user timezone
// const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
const timezoneUTC = 'GMT/UTC-0';

function setMeetupInfo(payload: MeetupFormFields) {
  const {
    title,
    description,
    date,
    location,
    banner_image_id, // eslint-disable-line @typescript-eslint/camelcase
  } = payload;
  const timezonedTime = utcToZonedTime(new Date(date), timezoneUTC); // the local time in a given timezone
  const formattedDate = format(timezonedTime, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");

  const meetupInfo = {
    title,
    description,
    location,
    date: formattedDate,
    banner_image_id, // eslint-disable-line @typescript-eslint/camelcase
  };

  return meetupInfo;
}

export function* updateMeetup({ payload }: UpdateMeetupRequestAction) {
  try {
    const updatedMeetupInfo = setMeetupInfo(payload);
    const { meetupId } = payload;

    const response: AxiosResponse<DataResponse> = yield call(
      api.put,
      `meetups/${meetupId}`,
      updatedMeetupInfo
    );

    const dateFormatted = format(
      parseISO(response.data.date),
      "MMMM dd 'at' HH:mm"
    );

    const meetupSuccessResponse: DataResponse = {
      ...response.data,
      dateFormatted,
    };

    yield put(updateMeetupSuccess(meetupSuccessResponse));
    toast.success(`Meetup updated!`);
  } catch (error) {
    yield put(updateMeetupFailure());
    toast.error(`Meetup was not updated. Try again later!`);
  }
}

export function* createMeetup({ payload }: CreateMeetupRequestAction) {
  try {
    const { banner_image_id } = payload; // eslint-disable-line
    if (!banner_image_id) { // eslint-disable-line
      throw new Error('You should insert a banner image for the meetup!');
    }
    const newMeetupInfo = setMeetupInfo(payload);

    const response: AxiosResponse<DataResponse> = yield call(
      api.post,
      `meetups/`,
      newMeetupInfo
    );

    const dateFormatted = format(
      parseISO(response.data.date),
      "MMMM dd 'at' HH:mm"
    );

    const newMeetupSuccessResponse: DataResponse = {
      ...response.data,
      dateFormatted,
    };

    yield put(createMeetupSuccess(newMeetupSuccessResponse));
    toast.success(`Meetup created!`);
  } catch (error) {
    if (error.message === 'You should insert a banner image for the meetup!') {
      toast.error(error.message);
      yield put(createMeetupFailure());
    } else {
      toast.error(`Meetup was not created. Try again later!`);
      yield put(createMeetupFailure());
    }
  }
}

export default all([
  takeLatest(MeetupTypes.UPDATE_MEETUP_REQUEST, updateMeetup),
  takeLatest(MeetupTypes.CREATE_MEETUP_REQUEST, createMeetup),
]);
