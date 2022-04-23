import { Injectable } from '@angular/core';
import { IItem } from '../../models/youtube-video.model';

@Injectable({
  providedIn: 'root',
})

export class YoutubeService {
  items!: IItem[];

  result!: IItem[];

  sortDate = 'asc';

  sortViews = 'asc';

  handleSortDate() {
    if (this.sortDate === 'asc') {
      this.items.sort((a, b) => (a.snippet.publishedAt > b.snippet.publishedAt ? 1 : -1));
      this.sortDate = 'desc';
    } else {
      this.items.sort((a, b) => (a.snippet.publishedAt > b.snippet.publishedAt ? -1 : 1));
      this.sortDate = 'asc';
    }
  }

  handleSortViews() {
    if (this.sortViews === 'asc') {
      this.items.sort((a, b) => (+a.statistics.viewCount > +b.statistics.viewCount ? 1 : -1));
      this.sortViews = 'desc';
    } else {
      this.items.sort((a, b) => (+a.statistics.viewCount > +b.statistics.viewCount ? -1 : 1));
      this.sortViews = 'asc';
    }
  }

  filter(val: string, list: IItem[]) {
    return list.filter((i) => (~i.snippet.localized.title.indexOf(val)));
  }

  handleFilterWords(query: string) {
    this.items = this.result;
    if (query) {
      this.items = this.filter(query, this.items);
    } else {
      this.items = this.result;
    }
  }
}
