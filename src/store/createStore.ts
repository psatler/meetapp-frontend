import { createStore, compose, applyMiddleware, Store } from 'redux';

// importing individual reducer types
import { AuthState } from './ducks/auth/types';

// store type definitions
export interface ApplicationState {
  auth: AuthState;
}
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// it creates the store and adds the middlewares and enhancers
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
