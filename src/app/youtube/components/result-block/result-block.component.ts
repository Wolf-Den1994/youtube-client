import { Component, Input } from '@angular/core';
import { ICard } from '../../../models/card.model';

@Component({
  selector: 'app-result-block',
  templateUrl: './result-block.component.html',
  styleUrls: ['./result-block.component.scss'],
})
export class ResultBlockComponent {
  @Input() items!: ICard[] | null;
}
