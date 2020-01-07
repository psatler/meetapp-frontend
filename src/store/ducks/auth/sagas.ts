import { toast } from 'react-toastify';

import { AxiosResponse } from 'axios';
import { all, takeLatest, call, put } from 'redux-saga/effects';

import api from '../../../services/api';
import history from '../../../services/history';
import { signInSuccess, signFailure } from './actions';
import { AuthTypes, SignInRequestAction } from './types';

// export function* signIn({ payload }: ReturnType<typeof signInRequest>) {
export function* signIn({ payload }: SignInRequestAction) {
  try {
    const { email, password } = payload;
    const response: AxiosResponse = yield call(api.post, 'session', {
      email,
      password,
    });
    const { data } = response;
    const { token, user } = data;

    yield put(signInSuccess(token, user));
    history.push('/dashboard');
  } catch (error) {
    console.tron.log(error);
    toast.error('Authentication failure. Try again later');
    yield put(signFailure());
  }
}

export default all([takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn)]);
