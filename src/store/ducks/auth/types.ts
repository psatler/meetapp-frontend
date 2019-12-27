/**
 * Action types
 */

export enum AuthTypes {
  SIGN_IN_REQUEST = '@auth/SIGN_IN_REQUEST',
  SIGN_IN_SUCCESS = '@auth/SIGN_IN_SUCCESS',
  SIGN_FAILURE = '@auth/SIGN_FAILURE',
}

/**
 * Data types: the format of the auth stored
 */
export interface AvatarInfo {
  id: number;
  url: string;
  path: string;
}
export interface UserInfo {
  id: number;
  name: string;
  email: string;
  avatar: AvatarInfo;
}

export interface AuthSuccessResponse {
  token: string;
  user: UserInfo;
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

/**
 * State types
 */
export interface AuthState {
  readonly token: string;
  readonly loggedIn: boolean;
  readonly loading: boolean;
}
