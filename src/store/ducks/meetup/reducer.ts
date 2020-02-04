import { Reducer } from 'redux';

import {
  DataResponse,
  MeetupState,
  MeetupTypes,
  MeetupActionTypes,
  MeetupById,
} from './types';

const INITIAL_STATE: MeetupState = {
  meetupsList: [],
  meetupsById: {},
};

const meetupReducer: Reducer<MeetupState, MeetupActionTypes> = (
  state = INITIAL_STATE,
  action: MeetupActionTypes
) => {
  switch (action.type) {
    case MeetupTypes.LOAD_MEETUPS: {
      const { meetups } = action.payload;
      const meetupsById = meetups.reduce(
        (acc: MeetupById, curr: DataResponse) => {
          acc[curr.id] = curr;
          return acc;
        },
        {}
      );

      return {
        ...state,
        meetupsList: [...meetups],
        meetupsById: {
          ...meetupsById,
        },
      };
    }

    default:
      return state;
  }
};

export default meetupReducer;
