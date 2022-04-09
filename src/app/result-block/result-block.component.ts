import { Component } from '@angular/core';
import { data } from './result-item/mockData';

@Component({
  selector: 'app-result-block',
  templateUrl: './result-block.component.html',
  styleUrls: ['./result-block.component.scss'],
})
export class ResultBlockComponent {
  items = data.items;
}
