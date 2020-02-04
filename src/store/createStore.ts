import { createStore, compose, applyMiddleware, Store } from 'redux';

// importing individual reducer types
import { AuthState } from './ducks/auth/types';
import { MeetupState } from './ducks/meetup/types';
import { UserState } from './ducks/user/types';

// store type definitions
export interface ApplicationState {
  auth: AuthState;
  user: UserState;
  meetups: MeetupState;
}
declare global {
  interface Window {
    // eslint-disable-next-line
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// it creates the store and adds the middlewares and enhancers
// eslint-disable-next-line
export default (reducers: any, middlewares: any): Store<ApplicationState> => {
  const enhancer =
    process.env.NODE_ENV === 'development'
      ? composeEnhancers(
          console.tron.createEnhancer(),
          applyMiddleware(...middlewares)
        )
      : applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
};
