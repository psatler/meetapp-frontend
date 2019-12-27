import { action } from 'typesafe-actions';

import { AuthTypes, AuthSuccessResponse } from './types';

export function signInRequest(email: string, password: string) {
  return action(AuthTypes.SIGN_IN_REQUEST, { email, password });
}

export function signInSuccess(token: string, user: AuthSuccessResponse) {
  return action(AuthTypes.SIGN_IN_SUCCESS, { token, user });
}

export function signFailure() {
  return action(AuthTypes.SIGN_FAILURE);
}
