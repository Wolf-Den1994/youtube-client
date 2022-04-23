import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class CoreService {
  transformItems({ id, snippet, statistics }: any) {
    return {
      id,
      src: snippet.thumbnails.medium.url,
      title: snippet.title,
      publishedAt: snippet.publishedAt,
      view: statistics.viewCount,
      like: statistics.likeCount,
      dislike: statistics.dislikeCount,
      comment: statistics.commentCount,
    };
  }
}
