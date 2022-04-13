import { Injectable } from '@angular/core';
import { IItem } from '../models/youtube-video.model';

@Injectable({
  providedIn: 'root',
})

export class YoutubeService {
  isShowHeader = true;

  isShowFilters = false;

  isShowResults = false;

  searchValue = '';

  items!: IItem[];

  result!: IItem[];

  sortDate = 'asc';

  sortViews = 'asc';

  toggleShowFilter() {
    this.isShowFilters = !this.isShowFilters;
  }

  handleSearch = () => {
    this.isShowResults = !!this.searchValue;
  };

  setSearchValue = (value: string) => {
    this.searchValue = value;
  };

  handleSortDate = () => {
    if (this.sortDate === 'asc') {
      this.items.sort((a, b) => (a.snippet.publishedAt > b.snippet.publishedAt ? 1 : -1));
      this.sortDate = 'desc';
    } else {
      this.items.sort((a, b) => (a.snippet.publishedAt > b.snippet.publishedAt ? -1 : 1));
      this.sortDate = 'asc';
    }
  };

  handleSortViews = () => {
    if (this.sortViews === 'asc') {
      this.items.sort((a, b) => (+a.statistics.viewCount > +b.statistics.viewCount ? 1 : -1));
      this.sortViews = 'desc';
    } else {
      this.items.sort((a, b) => (+a.statistics.viewCount > +b.statistics.viewCount ? -1 : 1));
      this.sortViews = 'asc';
    }
  };

  filter = (val: string, list: IItem[]) => list.filter((i) => (~i.snippet.localized.title.indexOf(val)));

  handleFilterWords = (query: string) => {
    this.items = this.result;
    if (query) {
      this.items = this.filter(query, this.items);
    } else {
      this.items = this.result;
    }
  };
}
