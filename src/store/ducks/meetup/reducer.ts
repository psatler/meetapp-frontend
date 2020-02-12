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
  loading: false,
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

    case MeetupTypes.UPDATE_MEETUP_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case MeetupTypes.UPDATE_MEETUP_FAILURE: {
      return {
        ...state,
        loading: false,
      };
    }

    case MeetupTypes.UPDATE_MEETUP_SUCCESS: {
      const {
        id,
        past,
        title,
        description,
        location,
        date,
        dateFormatted,
        banner,
      } = action.payload;
      const editedMeetup = state.meetupsList.map((meetup: DataResponse) => {
        if (meetup.id === id) {
          return {
            ...meetup,
            past,
            title,
            description,
            location,
            date,
            dateFormatted,
            banner,
          };
        }
        return meetup;
      });

      return {
        ...state,
        loading: false,
        meetupsById: {
          ...state.meetupsById,
          [id]: {
            ...state.meetupsById[id],
            past,
            title,
            description,
            location,
            date,
            dateFormatted,
            banner,
          },
        },
        meetupsList: editedMeetup,
      };
    }

    case MeetupTypes.DELETE_MEETUP_SUCCESS: {
      const { id } = action.payload;
      const newMeetupList = state.meetupsList.filter(
        meetup => meetup.id !== id
      );
      // value below will be used to remove the element from object
      const { [id]: value, ...rest } = state.meetupsById; // eslint-disable-line
      // delete state.meetupsById[id];

      return {
        ...state,
        meetupsList: newMeetupList,
        meetupsById: rest,
      };
    }

    case MeetupTypes.CREATE_MEETUP_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case MeetupTypes.CREATE_MEETUP_FAILURE: {
      return {
        ...state,
        loading: false,
      };
    }

    case MeetupTypes.CREATE_MEETUP_SUCCESS: {
      const { id } = action.payload;
      const newMeetupList = state.meetupsList.concat(action.payload);

      return {
        ...state,
        meetupsList: newMeetupList,
        meetupsById: {
          ...state.meetupsById,
          [id]: {
            ...action.payload,
          },
        },
        loading: false,
      };
    }

    default:
      return state;
  }
};

export default meetupReducer;
