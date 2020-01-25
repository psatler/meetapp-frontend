export enum UpdateUserTypes {
  UPDATE_PROFILE_REQUEST = '@user/UPDATE_PROFILE_REQUEST',
  UPDATE_PROFILE_SUCCESS = '@user/UPDATE_PROFILE_SUCCESS',
  UPDATE_PROFILE_FAILURE = '@user/UPDATE_PROFILE_FAILURE',
}

export interface UpdateProfileRequestAction {
  type: UpdateUserTypes.UPDATE_PROFILE_REQUEST;
  payload: ProfileFormFieldTypes;
}

export interface UpdateProfileSuccessAction {
  type: UpdateUserTypes.UPDATE_PROFILE_SUCCESS;
  payload: {
    profile: UserInfo;
  };
}

export interface UpdateProfileFailureAction {
  type: UpdateUserTypes.UPDATE_PROFILE_FAILURE;
}

export type UserActionTypes =
  | UpdateProfileRequestAction
  | UpdateProfileSuccessAction
  | UpdateProfileFailureAction;

export interface ProfileFormFieldTypes {
  name: string;
  email: string;
  avatar_id?: string;
  banner_image_id?: string;
  oldPassword?: string;
  password?: string;
  confirmPassword?: string;
}

export interface UserInfo {
  id: number;
  name: string;
  email: string;
  avatar: AvatarInfo;
}
export interface AvatarInfo {
  id: number;
  url: string;
  path: string;
}

/**
 * Action types
 */

export interface UserState {
  readonly profile: UserInfo | null;
  // readonly loggedIn: boolean;
  // readonly loading: boolean;
}
