export enum Time {
  SecInOneWeek = 604800000,
  SecInOneMonth = 2419200000,
  SecInSixMonth = 15638400000,
}

export enum PathQuery {
  Search = 'search?type=video&part=snippet&maxResults=10',
  Videos = 'videos?part=snippet,statistics',
}

export const API_KEY = 'AIzaSyDEKqmJuPLMs4SryuODHoSmxvgdBoDfKmU';
export const URL_SERVER = 'https://www.googleapis.com/youtube/v3/';
