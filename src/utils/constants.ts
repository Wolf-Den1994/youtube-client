export enum Time {
  SecInOneWeek = 604800000,
  SecInOneMonth = 2419200000,
  SecInSixMonth = 15638400000,
}

export enum Query {
  Part = 'snippet,statistics',
}

export enum PathQuery {
  Search = 'search',
  Videos = 'videos',
}

export const API_KEY = 'AIzaSyDEKqmJuPLMs4SryuODHoSmxvgdBoDfKmU';
export const URL_SERVER = 'https://www.googleapis.com/youtube/v3/';
export const URL_VIDEO = `${URL_SERVER}${PathQuery.Search}?key=${API_KEY}&type=video&part=snippet&maxResults=15`;
export const URL_VIDEOS = `${URL_SERVER}${PathQuery.Videos}?key=${API_KEY}`;
