import { Component, Input } from '@angular/core';
import { FilterService } from '../../youtube/services/youtube.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    private filterService: FilterService,
  ) {}

  changeShowFilter = () => {
    console.log('this.filterService', this.filterService);
    // this.filterService.isShowFilters = !this.filterService.isShowFilters;
    this.filterService.toggleShowFilter();
    // this.toggleShowFilter();
  };

  // @Input() toggleShowFilter!: Function;

  @Input() setSearchValue!: Function;

  @Input() handleSearch!: Function;

  changeSearchValue = (value: string) => {
    this.setSearchValue(value);
  };

  startSearch = () => {
    this.handleSearch();
  };
}
