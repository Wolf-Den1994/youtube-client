import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IItem, IVideo } from '../models/youtube-video.model';
import { IVideoHttp } from '../models/youtube-http.model';
import { Query, URL_VIDEO, URL_VIDEOS } from '../../../utils/constants';

@Injectable({
  providedIn: 'root',
})

export class YoutubeService {
  constructor(
    private http: HttpClient,
  ) {}

  isShowHeader = true;

  isShowFilters = false;

  isShowResults = false;

  searchValue = '';

  items!: IItem[];

  result!: IItem[];

  itemIds: string[] = [];

  sortDate = 'asc';

  sortViews = 'asc';

  showHeader() {
    this.isShowHeader = true;
  }

  hideHeader() {
    this.isShowHeader = false;
  }

  toggleShowFilter() {
    this.isShowFilters = !this.isShowFilters;
  }

  setSearchValue(value: string) {
    this.searchValue = value;

    this.http.get<IVideoHttp>(`${URL_VIDEO}&q=${this.searchValue}`)
      .subscribe(({ items }) => {
        this.itemIds = items.map(({ id }) => id.videoId);
        this.http.get<IVideo>(`${URL_VIDEOS}&id=${this.itemIds.join(',')}&part=${Query.Part}`)
          .subscribe(({ items: videosItems }) => {
            this.result = videosItems;
            this.items = videosItems;

            this.isShowResults = !!this.searchValue;
          });
      });
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
