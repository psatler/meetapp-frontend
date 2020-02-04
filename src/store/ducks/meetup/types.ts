export interface DataResponse {
  id: number;
  past: boolean;
  title: string;
  description: string;
  location: string;
  date: string;
  dateFormatted: string;
  banner: BannerInfo;
  // organizer: UserInfo;
}

export interface BannerInfo {
  id: number;
  url: string;
  name: string;
  path: string;
}

export enum MeetupTypes {
  MEETUP_REQUEST = '@meetup/MEETUP_REQUEST',
  MEETUP_SUCCESS = '@meetup/MEETUP_SUCCESS',
  MEETUP_FAILURE = '@meetup/MEETUP_FAILURE',
  LOAD_MEETUPS = '@meetup/LOAD_MEETUPS',
}

export interface LoadMeetupAction {
  type: MeetupTypes.LOAD_MEETUPS;
  payload: {
    meetups: DataResponse[];
  };
}

export type MeetupActionTypes = LoadMeetupAction;

export interface MeetupById {
  [key: number]: DataResponse;
}

export interface MeetupState {
  meetupsList: DataResponse[];
  meetupsById: MeetupById;
}
