import { combineReducers } from 'redux';

import auth from './auth/reducer';
import meetups from './meetup/reducer';
import user from './user/reducer';

export default combineReducers({
  auth,
  user,
  meetups,
});
