export interface ICard {
  id: string;
  src: string;
  title: string;
  view: string;
  like: string;
  dislike: string | undefined;
  comment: string;
  publishedAt: string;
  isCustom?: boolean;
}
