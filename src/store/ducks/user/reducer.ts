import { Reducer } from 'redux';

import { AuthTypes, AuthActionTypes } from '../auth/types';
import { UserState, UpdateUserTypes, UserActionTypes } from './types';

const INITIAL_STATE: UserState = {
  profile: null,
};

const userReducer: Reducer<UserState, AuthActionTypes> = (
  state = INITIAL_STATE,
  action: AuthActionTypes | UserActionTypes
) => {
  switch (action.type) {
    case AuthTypes.SIGN_IN_SUCCESS: {
      // listening the same actions as the Auth reducer, though, storing different pieces of info
      const profile = action.payload.user;
      return {
        ...state,
        profile,
      };
    }

    case UpdateUserTypes.UPDATE_PROFILE_SUCCESS: {
      const { profile } = action.payload;

      console.log('profile,', profile);

      return {
        ...state,
        profile,
      };
    }

    default:
      return state;
  }
};

export default userReducer;
