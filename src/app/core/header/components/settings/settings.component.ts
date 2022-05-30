import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { toggleShowFilter } from '../../../../redux/actions/actions';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  constructor(
    private store: Store,
  ) {}

  handleShowFilter() {
    this.store.dispatch(toggleShowFilter());
  }
}
