import { Component, Input } from '@angular/core';
import { IItem } from './result-item/result-item.model';

@Component({
  selector: 'app-result-block',
  templateUrl: './result-block.component.html',
  styleUrls: ['./result-block.component.scss'],
})
export class ResultBlockComponent {
  @Input() items!: IItem[];
}
