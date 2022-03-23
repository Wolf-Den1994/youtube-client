export interface IStatisticsVideo {
  viewCount: string
  likeCount: string
  dislikeCount: string
  favoriteCount: string
  commentCount: string
}

export interface IVideo {
  id: string
  title: string
  publishedAt: string
  channelId: string
  description: string
  channelTitle: string
  tags: string[]
  categoryId: string
  defaultAudioLanguage: string
  statistics: IStatisticsVideo
}

export interface IVideos {
  title: string
  items: IVideo[]
}
