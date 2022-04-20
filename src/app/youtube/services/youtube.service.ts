import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap, map } from 'rxjs/operators';
import { IItem } from '../models/youtube-video.model';
import { ApiService } from '../../shared/services/api.service';

@Injectable({
  providedIn: 'root',
})

export class YoutubeService {
  constructor(
    private http: HttpClient,
    private apiService: ApiService,
  ) {}

  isShowResults = false;

  searchValue = '';

  items!: IItem[];

  result!: IItem[];

  sortDate = 'asc';

  sortViews = 'asc';

  setSearchValue(value: string) {
    this.searchValue = value;

    return this.apiService.getVideosId(this.searchValue).pipe(
      switchMap(({ items }) => {
        const itemIds = items.map(({ id }) => id.videoId);
        return this.apiService.getVideoItems(itemIds).pipe(
          map(({ items: videosItems }) => {
            this.result = videosItems;
            this.items = videosItems;
            this.isShowResults = !!this.searchValue;
          }),
        );
      }),
    ).subscribe();
  }

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
