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
