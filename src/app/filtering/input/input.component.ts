import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() startFilter!: Function;

  value = '';

  inputHandle(newValue: string) {
    this.value = newValue;
    this.startFilter(newValue);
  }
}
