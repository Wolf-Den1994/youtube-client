import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class FilterService {
  isShowFilters = false;

  isShowResults = false;

  searchValue = '';

  items = [];

  toggleShowFilter() {
    this.isShowFilters = !this.isShowFilters;
  }

  handleSearch = () => {
    this.isShowResults = !!this.searchValue;
  };

  setSearchValue = (value: string) => {
    this.searchValue = value;
  };
}
