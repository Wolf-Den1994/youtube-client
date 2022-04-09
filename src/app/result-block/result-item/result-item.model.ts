interface IStatisticsVideo {
  viewCount: string
  likeCount: string
  dislikeCount: string
  favoriteCount: string
  commentCount: string
}

interface ISize {
  url: string
  width: number
  height: number
}

interface IThumbnails {
  default: ISize
  medium: ISize
  high: ISize
  standard: ISize
  maxres: ISize
}

interface ILocalized {
  title: string
  description: string
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
  defaultLanguage?: string
  localized: ILocalized
  defaultAudioLanguage: string
}

interface IVideo {
  kind: string
  etag: string
  id: string
  snippet: ISnippet
  statistics: IStatisticsVideo
}

interface IPageInfo {
  totalResults: number
  resultsPerPage: number
}

export interface IVideos {
  kind: string
  etag: string
  pageInfo: IPageInfo
  items: IVideo[]
}
