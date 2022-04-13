import { Component, Input } from '@angular/core';
import { FilterService } from '../services/youtube.service';

@Component({
  selector: 'app-filtering',
  templateUrl: './filtering.component.html',
  styleUrls: ['./filtering.component.scss'],
})
export class FilteringComponent {
  constructor(
    public filterService: FilterService,
  ) {}

  // isShowFilters = this.filterService.isShowFilters;

  // @Input() isShowFilters!: boolean;

  @Input() handleSortDate!: Function;

  @Input() handleSortViews!: Function;

  @Input() handleFilterWords!: Function;

  startSort = (content: string) => {
    if (content === 'Date') {
      this.handleSortDate();
    } else {
      this.handleSortViews();
    }
  };

  startFilter = (query: string) => {
    this.handleFilterWords(query);
  };
}
