import { UserInfo, UserState } from '../user/types';

/**
 * Action types
 */

export enum AuthTypes {
  SIGN_IN_REQUEST = '@auth/SIGN_IN_REQUEST',
  SIGN_IN_SUCCESS = '@auth/SIGN_IN_SUCCESS',
  SIGN_FAILURE = '@auth/SIGN_FAILURE',
  SIGN_UP_REQUEST = '@auth/SIGN_UP_REQUEST',
  SIGN_OUT_REQUEST = '@auth/SIGN_OUT_REQUEST',
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

export interface SignOutAction {
  type: AuthTypes.SIGN_OUT_REQUEST;
}

export interface SignUpRequestAction {
  type: AuthTypes.SIGN_UP_REQUEST;
  payload: {
    name: string;
    email: string;
    password: string;
  };
}

export type AuthActionTypes =
  | SignInRequestAction
  | SignInSuccessAction
  | SignInFailureAction
  | SignUpRequestAction
  | SignOutAction;

export const ReduxPersistRehydrateActionType = 'persist/REHYDRATE';
export interface ReduxPersistRehydrateAction {
  type: string;
  payload: {
    auth: AuthState;
    user: UserState;
  };
}
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
