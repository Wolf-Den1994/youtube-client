import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { handleSortDate, handleSortViews } from '../../../../../redux/actions/actions';

@Component({
  selector: 'app-button-sort',
  templateUrl: './button-sort.component.html',
  styleUrls: ['./button-sort.component.scss'],
})
export class ButtonSortComponent {
  constructor(
    private store: Store,
  ) {}

  @Input() content!: string;

  handleClick(content: string) {
    if (content === 'Date') {
      this.store.dispatch(handleSortDate());
    } else {
      this.store.dispatch(handleSortViews());
    }
  }
}
