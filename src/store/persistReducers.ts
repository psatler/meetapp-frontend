import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// eslint-disable-next-line
export default (reducers: any) => {
  const persistedReducer = persistReducer(
    {
      key: 'meetapp-frontend',
      storage, // defaults to local storage on web
      whitelist: ['auth', 'user'], // reducers we want to persist
    },
    reducers
  );

  return persistedReducer;
};
