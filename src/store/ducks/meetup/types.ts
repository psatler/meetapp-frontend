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

export interface UpdateMeetupResponse extends DataResponse {
  banner_image_id: string;
  createdAt: string;
  updatedAt: string;
  user_id: number;
}

export interface MeetupFormFields {
  title: string;
  description: string;
  location: string;
  date: string;
  banner_image_id: string;
}

export interface MeetupFormFieldsWithId extends MeetupFormFields {
  meetupId: string;
}

export enum MeetupTypes {
  UPDATE_MEETUP_REQUEST = '@meetup/UPDATE_MEETUP_REQUEST',
  UPDATE_MEETUP_SUCCESS = '@meetup/UPDATE_MEETUP_SUCCESS',
  UPDATE_MEETUP_FAILURE = '@meetup/UPDATE_MEETUP_FAILURE',
  LOAD_MEETUPS = '@meetup/LOAD_MEETUPS',
  DELETE_MEETUP_REQUEST = '@meetup/DELETE_MEETUP_REQUEST',
  DELETE_MEETUP_SUCCESS = '@meetup/DELETE_MEETUP_SUCCESS',
  DELETE_MEETUP_FAILURE = '@meetup/DELETE_MEETUP_FAILURE',
  CREATE_MEETUP_REQUEST = '@meetup/CREATE_MEETUP_REQUEST',
  CREATE_MEETUP_SUCCESS = '@meetup/CREATE_MEETUP_SUCCESS',
  CREATE_MEETUP_FAILURE = '@meetup/CREATE_MEETUP_FAILURE',
}

export interface LoadMeetupAction {
  type: MeetupTypes.LOAD_MEETUPS;
  payload: {
    meetups: DataResponse[];
  };
}

export interface CreateMeetupRequestAction {
  type: MeetupTypes.CREATE_MEETUP_REQUEST;
  payload: MeetupFormFields;
}

export interface CreateMeetupSuccessAction {
  type: MeetupTypes.CREATE_MEETUP_SUCCESS;
  payload: DataResponse;
}

export interface CreateMeetupFailureAction {
  type: MeetupTypes.CREATE_MEETUP_FAILURE;
}

export interface UpdateMeetupRequestAction {
  type: MeetupTypes.UPDATE_MEETUP_REQUEST;
  payload: MeetupFormFieldsWithId;
}

export interface UpdateMeetupSuccessAction {
  type: MeetupTypes.UPDATE_MEETUP_SUCCESS;
  payload: DataResponse;
}

export interface UpdateMeetupFailureAction {
  type: MeetupTypes.UPDATE_MEETUP_FAILURE;
}

export interface DeleteMeetupRequestAction {
  type: MeetupTypes.DELETE_MEETUP_REQUEST;
}

export interface DeleteMeetupSuccessAction {
  type: MeetupTypes.DELETE_MEETUP_SUCCESS;
  payload: {
    id: number;
  };
}

export interface DeleteMeetupFailureAction {
  type: MeetupTypes.DELETE_MEETUP_FAILURE;
}

export type MeetupActionTypes =
  | LoadMeetupAction
  | UpdateMeetupRequestAction
  | UpdateMeetupSuccessAction
  | UpdateMeetupFailureAction
  | DeleteMeetupRequestAction
  | DeleteMeetupSuccessAction
  | DeleteMeetupFailureAction
  | CreateMeetupRequestAction
  | CreateMeetupSuccessAction
  | CreateMeetupFailureAction;

export interface MeetupById {
  [key: number]: DataResponse;
}

export interface MeetupState {
  meetupsList: DataResponse[];
  meetupsById: MeetupById;
  loading: boolean;
}
