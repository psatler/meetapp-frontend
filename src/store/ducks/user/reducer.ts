import { Reducer } from 'redux';

import { AuthTypes, AuthActionTypes } from '../auth/types';
import { UserState, UpdateUserTypes, UserActionTypes } from './types';

const INITIAL_STATE: UserState = {
  profile: null,
};

type UserActionsTypes = AuthActionTypes | UserActionTypes;

const userReducer: Reducer<UserState, UserActionsTypes> = (
  state = INITIAL_STATE,
  action: UserActionsTypes
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
    case AuthTypes.SIGN_OUT_REQUEST: {
      return {
        ...state,
        profile: null,
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
