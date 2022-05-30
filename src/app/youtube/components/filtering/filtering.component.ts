import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { isShowFilterSelector } from '../../../redux/selectors/filters';

@Component({
  selector: 'app-filtering',
  templateUrl: './filtering.component.html',
  styleUrls: ['./filtering.component.scss'],
})
export class FilteringComponent {
  isShowFilters$ = this.store.select(isShowFilterSelector);

  constructor(
    private store: Store,
  ) {}
}
