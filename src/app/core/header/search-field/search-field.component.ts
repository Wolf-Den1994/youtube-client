import { Component, Input } from '@angular/core';
import { FilterService } from '../../../youtube/services/youtube.service';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss'],
})
export class SearchFieldComponent {
  constructor(
    public filterService: FilterService,
  ) {}

  @Input() changeSearchValue!: Function;

  @Input() startSearch!: Function;

  inputHandle = (value: string) => {
    this.filterService.setSearchValue(value);
    // this.changeSearchValue(value);
  };

  handleSearch = () => {
    // this.startSearch();
    this.filterService.handleSearch();
  };
}
