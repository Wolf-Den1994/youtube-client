import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
})
export class ButtonsComponent {
  @Input() content!: string;

  @Input() startSort!: Function;

  handleClick = (content: string) => {
    this.startSort(content);
  };
}
