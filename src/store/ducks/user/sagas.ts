import { toast } from 'react-toastify';

import { AxiosResponse } from 'axios';
import { all, takeLatest, call, put } from 'redux-saga/effects';

import api from '../../../services/api';
import { updateProfileSuccess, updateProfileFailure } from './actions';
import { UpdateUserTypes, UpdateProfileRequestAction } from './types';

export function* updateProfile({ payload }: UpdateProfileRequestAction) {
  try {
    const { name, email, ...rest } = payload;

    // if we have pieces of information about an old password, we add the new password info
    const profile = { name, email, ...(rest.oldPassword ? rest : {}) };

    const response: AxiosResponse = yield call(api.put, 'users', profile);

    console.log('response', response);

    toast.success('Profile successfully updated!');
    yield put(updateProfileSuccess(response.data));
  } catch (error) {
    toast.error('Error while updating profile. Check your data!');
    yield put(updateProfileFailure());
  }
}

export default all([
  takeLatest(UpdateUserTypes.UPDATE_PROFILE_REQUEST, updateProfile),
]);
