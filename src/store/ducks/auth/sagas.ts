import { toast } from 'react-toastify';

import { AxiosResponse } from 'axios';
import { all, takeLatest, call, put } from 'redux-saga/effects';

import api from '../../../services/api';
import history from '../../../services/history';
import { signInSuccess, signFailure } from './actions';
import {
  AuthTypes,
  SignInRequestAction,
  SignUpRequestAction,
  ReduxPersistRehydrateActionType,
  ReduxPersistRehydrateAction,
} from './types';

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

    // adding the token to the header of the requests made via axios
    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));
    history.push('/dashboard');
  } catch (error) {
    console.tron.log(error);
    toast.error('Authentication failure. Try again later');
    yield put(signFailure());
  }
}

// for when the user is registering in the application, creating its account
export function* signUp({ payload }: SignUpRequestAction) {
  try {
    const { name, email, password } = payload;
    yield call(api.post, 'users', {
      name,
      email,
      password,
    });

    toast.success('Account created! You can now log in');

    // after creating the registration, we redirect the user to the login page
    history.push('/');
  } catch (error) {
    toast.error('Sign up failured.');
    yield put(signFailure());
  }
}

export function setToken({ payload }: ReduxPersistRehydrateAction) {
  if (!payload) {
    return;
  }

  const { token } = payload.auth;

  if (token) {
    // adding the token to the header of the requests made via axios
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  history.push('/');
}

export default all([
  // listening to redux-persist action so that we update axios header with a token
  takeLatest(ReduxPersistRehydrateActionType, setToken), // there no async method, so we don't need the generator
  takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
  takeLatest(AuthTypes.SIGN_UP_REQUEST, signUp),
  takeLatest(AuthTypes.SIGN_OUT_REQUEST, signOut),
]);
