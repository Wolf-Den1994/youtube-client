export interface IVideo {
  kind: string
  etag: string
  pageInfo: IPageInfo
  items: IItems[]
}

interface IPageInfo {
  totalResults: number
  resultsPerPage: number
}

interface IItems {
  kind: string
  etag: string
  id: string
  snippet: ISnippet
  statistics: IStatisticsVideo
}

interface ISnippet {
  publishedAt: string
  channelId: string
  title: string
  description: string
  thumbnails: IThumbnails
  channelTitle: string
  tags: string[]
  categoryId: string
  liveBroadcastContent: string
  localized: ILocalized
  defaultAudioLanguage: string
}

interface ILocalized {
  title: string
  description: string
}

interface IThumbnails {
  default: ISize
  medium: ISize
  high: ISize
  standard: ISize
  maxres: ISize
}

interface ISize {
  url: string
  width: 120 | 320 | 480 | 640 | 1280
  height: 90 | 180 | 360 | 480 | 720
}

interface IStatisticsVideo {
  viewCount: string
  likeCount: string
  dislikeCount: string
  favoriteCount: string
  commentCount: string
}
