export enum Time {
  SecInOneWeek = 604800000,
  SecInOneMonth = 2419200000,
  SecInSixMonth = 15638400000,
}

export const API_KEY = 'AIzaSyDEKqmJuPLMs4SryuODHoSmxvgdBoDfKmU';
export const URL_SERVER = 'https://www.googleapis.com/youtube/v3';
export const URL_VIDEO = `${URL_SERVER}/search?key=${API_KEY}&type=video&part=snippet&maxResults=15&q=js`;
