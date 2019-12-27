import createSagaMiddleware from 'redux-saga';

import createStore from './createStore';
// importing the reducer's types
import { AuthState } from './ducks/auth/types';
import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';

export interface ApplicationState {
  auth: AuthState;
}

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middlewares = [sagaMiddleware];

// const store: Store<ApplicationState> = createStore(rootReducer, middlewares);
const store = createStore(rootReducer, middlewares);

sagaMiddleware.run(rootSaga);

export default store;
