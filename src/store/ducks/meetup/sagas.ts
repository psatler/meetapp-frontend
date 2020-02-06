import { toast } from 'react-toastify';

import { AxiosResponse } from 'axios';
import { format, parseISO } from 'date-fns';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';
import { updateMeetupSuccess, updateMeetupFailure } from './actions';
import { MeetupTypes, UpdateMeetupRequestAction, DataResponse } from './types';

export function* updateMeetup({ payload }: UpdateMeetupRequestAction) {
  try {
    const {
      title,
      description,
      date,
      location,
      banner_image_id, // eslint-disable-line @typescript-eslint/camelcase
      meetupId,
    } = payload;

    const formattedDate = format(
      new Date(date),
      "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"
    );

    const updatedMeetupInfo = {
      title,
      description,
      location,
      date: formattedDate,
      banner_image_id, // eslint-disable-line @typescript-eslint/camelcase
    };

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

    console.log('response', response.data);
    yield put(updateMeetupSuccess(meetupSuccessResponse));
    toast.success(`Meetup updated!`);
  } catch (error) {
    console.warn('error updatedMeetup', error);
    yield put(updateMeetupFailure());
    toast.error(`Meetup was not updated. Try again later!`);
  }
}

export default all([
  takeLatest(MeetupTypes.UPDATE_MEETUP_REQUEST, updateMeetup),
]);
