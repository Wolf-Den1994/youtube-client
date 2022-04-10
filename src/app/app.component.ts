import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IVideo, IItem } from './result-block/result-item/result-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  items!: IItem[];

  result!: IItem[];

  title = 'youtube-client';

  isShowFilters = false;

  isShowResults = false;

  searchValue = '';

  sortDate = 'asc';

  sortViews = 'asc';

  ngOnInit() {
    this.http.get<IVideo>('assets/mocks/response.json').subscribe((data) => {
      this.result = data.items;
      this.items = data.items;
    });
  }

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
