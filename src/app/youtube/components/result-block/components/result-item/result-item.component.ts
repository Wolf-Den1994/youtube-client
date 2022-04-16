import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.scss'],
})

export class ResultItemComponent {
  @Input() id!: string;

  @Input() src!: string;

  @Input() view!: string;

  @Input() like!: string;

  @Input() dislike!: string;

  @Input() comment!: string;

  @Input() title!: string;

  @Input() publishedAt!: string;
}
