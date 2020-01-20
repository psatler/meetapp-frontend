import { action } from 'typesafe-actions';

import { UpdateUserTypes, UserActionTypes, UserInfo } from './types';

export function updateProfileRequest(data: any): UserActionTypes {
  return action(UpdateUserTypes.UPDATE_PROFILE_REQUEST, data);
}

export function updateProfileSuccess(profile: UserInfo): UserActionTypes {
  return action(UpdateUserTypes.UPDATE_PROFILE_SUCCESS, { profile });
}

export function updateProfileFailure(): UserActionTypes {
  return action(UpdateUserTypes.UPDATE_PROFILE_FAILURE);
}
