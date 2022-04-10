import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filtering',
  templateUrl: './filtering.component.html',
  styleUrls: ['./filtering.component.scss'],
})
export class FilteringComponent {
  @Input() isShowFilters!: boolean;

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
