import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'youtube-client';

  isShowFilters = false;

  isShowResults = false;

  searchValue = '';

  setSearchValue = (value: string) => {
    this.searchValue = value;
  };

  toggleShowFilter = () => {
    this.isShowFilters = !this.isShowFilters;
  };

  handleSearch = () => {
    if (this.searchValue) this.isShowResults = true;
    else this.isShowResults = false;
  };
}
