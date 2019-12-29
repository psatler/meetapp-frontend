import { Store } from 'redux';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import createStore, { ApplicationState } from './createStore';
import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';
import persistReducers from './persistReducers';

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middlewares = [sagaMiddleware];

const persistedRootReducer = persistReducers(rootReducer);
const store: Store<ApplicationState> = createStore(
  persistedRootReducer,
  middlewares
);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
