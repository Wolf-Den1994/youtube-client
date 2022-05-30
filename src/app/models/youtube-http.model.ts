export interface IVideoHttp {
  etag: string
  items: IItem[]
  kind: string
  nextPageToken: string
  pageInfo: IPageInfo
  regionCode: string
}

interface IPageInfo {
  resultsPerPage: number
  totalResults: number
}

export interface IItem {
  etag: string
  id: IIdItem
  kind: string
  snippet: ISnippet
  statistics: IStatisticsVideo
}

interface IIdItem {
  kind: string
  videoId: string
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
  defaultLanguage?: string
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
  favoriteCount: string
  commentCount: string
}
