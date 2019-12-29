export interface UserInfo {
  id: number;
  name: string;
  email: string;
  avatar: AvatarInfo;
}
export interface AvatarInfo {
  id: number;
  url: string;
  path: string;
}

/**
 * Action types
 */

export interface UserState {
  readonly profile: UserInfo | null;
  // readonly loggedIn: boolean;
  // readonly loading: boolean;
}
