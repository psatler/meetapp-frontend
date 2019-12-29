import { action } from 'typesafe-actions';

import { AuthTypes, UserInfo, AuthActionTypes } from './types';

// typescript infers it is a signInRequestAction interface
export function signInRequest(
  email: string,
  password: string
): AuthActionTypes {
  return action(AuthTypes.SIGN_IN_REQUEST, { email, password });
}

export function signInSuccess(token: string, user: UserInfo): AuthActionTypes {
  return action(AuthTypes.SIGN_IN_SUCCESS, { token, user });
}

export function signFailure(): AuthActionTypes {
  return action(AuthTypes.SIGN_FAILURE);
}
