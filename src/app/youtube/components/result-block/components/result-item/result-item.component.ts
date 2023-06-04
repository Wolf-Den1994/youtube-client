import { Component, Input } from '@angular/core';
import { ICard } from '../../../../../models/card.model';

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.scss'],
})

export class ResultItemComponent {
  @Input() item!: ICard;
}
