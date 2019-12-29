import { Reducer } from 'redux';

import { AuthState, AuthTypes, AuthActionTypes } from './types';

const INITIAL_STATE: AuthState = {
  token: '',
  loading: false,
  loggedIn: false,
};

const authReducer: Reducer<AuthState, AuthActionTypes> = (
  state = INITIAL_STATE,
  action: AuthActionTypes
) => {
  switch (action.type) {
    case AuthTypes.SIGN_IN_SUCCESS: {
      const { token } = action.payload;
      // const { token } = (action as SignInSuccessAction).payload;
      return {
        ...state,
        token,
        loggedIn: true,
        loading: false,
      };
    }

    default:
      return state;
  }
};

export default authReducer;
