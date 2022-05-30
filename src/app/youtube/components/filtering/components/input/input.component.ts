import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { handleFilterWords } from '../../../../../redux/actions/actions';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  constructor(
    private store: Store,
  ) {}

  value = '';

  inputHandle(newValue: string) {
    this.value = newValue;
    this.store.dispatch(handleFilterWords({ word: newValue }));
  }
}
