import { UserInfo } from '../user/types';

/**
 * Action types
 */

export enum AuthTypes {
  SIGN_IN_REQUEST = '@auth/SIGN_IN_REQUEST',
  SIGN_IN_SUCCESS = '@auth/SIGN_IN_SUCCESS',
  SIGN_FAILURE = '@auth/SIGN_FAILURE',
}

export interface SignInRequestAction {
  type: AuthTypes.SIGN_IN_REQUEST;
  payload: {
    email: string;
    password: string;
  };
}

export interface SignInSuccessAction {
  type: AuthTypes.SIGN_IN_SUCCESS;
  payload: AuthSuccessResponse;
}

export interface SignInFailureAction {
  type: AuthTypes.SIGN_FAILURE;
}

export type AuthActionTypes =
  | SignInRequestAction
  | SignInSuccessAction
  | SignInFailureAction;

/**
 * Data types: the format of the auth stored
 */

export interface AuthSuccessResponse {
  token: string;
  user: UserInfo;
}

/**
 * State types
 */
export interface AuthState {
  readonly token: string;
  readonly loggedIn: boolean;
  readonly loading: boolean;
}
