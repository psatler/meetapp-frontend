import { Reducer, AnyAction } from 'redux';

import { AuthState, AuthTypes, SignInSuccessAction } from './types';

const INITIAL_STATE: AuthState = {
  token: '',
  loading: false,
  loggedIn: false,
};

const authReducer: Reducer<AuthState> = (
  state = INITIAL_STATE,
  action: AnyAction
) => {
  switch (action.type) {
    case AuthTypes.SIGN_IN_SUCCESS: {
      const { token } = (action as SignInSuccessAction).payload;
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
