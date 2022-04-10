import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss'],
})
export class SearchFieldComponent {
  @Input() changeSearchValue!: Function;

  @Input() startSearch!: Function;

  inputHandle = (value: string) => {
    this.changeSearchValue(value);
  };

  handleSearch = () => {
    this.startSearch();
  };
}
