import { action } from 'typesafe-actions';

import { UserInfo } from '../user/types';
import { AuthTypes, AuthActionTypes } from './types';

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

export function signUpRequest(
  name: string,
  email: string,
  password: string
): AuthActionTypes {
  return action(AuthTypes.SIGN_UP_REQUEST, { name, email, password });
}

// this action is listened directly by the reducer, and not only the sagas
export function signOutRequest(): AuthActionTypes {
  return action(AuthTypes.SIGN_OUT_REQUEST);
}
