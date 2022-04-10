import { Component } from '@angular/core';
import { data } from './result-block/result-item/mockData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  items = data.items;

  title = 'youtube-client';

  isShowFilters = false;

  isShowResults = false;

  searchValue = '';

  sortDate = 'asc';

  sortViews = 'asc';

  setSearchValue = (value: string) => {
    this.searchValue = value;
  };

  toggleShowFilter = () => {
    this.isShowFilters = !this.isShowFilters;
  };

  handleSearch = () => {
    this.isShowResults = !!this.searchValue;
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
}
