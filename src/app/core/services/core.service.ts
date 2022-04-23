import { Injectable } from '@angular/core';
import { IItem } from '../../models/youtube-video.model';
import { ICard } from '../../models/card.model';

@Injectable({
  providedIn: 'root',
})

export class CoreService {
  transformItems({ id, snippet, statistics }: IItem): ICard {
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
