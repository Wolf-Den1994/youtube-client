import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.scss'],
})

export class ResultItemComponent implements OnInit {
  @Input() src!: string;

  @Input() view!: string;

  @Input() like!: string;

  @Input() dislike!: string;

  @Input() comment!: string;

  @Input() title!: string;

  @Input() publishedAt!: string;

  lineColor = 'yellow';

  paintLine = () => {
    const date = new Date(this.publishedAt);
    const secInOneWeek = 604800000;
    const secInOneMonth = 2419200000;
    const secInSixMonth = 15638400000;
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).valueOf();
    const dateString = date.valueOf();
    if (dateString < today - secInSixMonth) this.lineColor = 'red';
    if (dateString > today - secInOneMonth) this.lineColor = 'green';
    if (dateString > today - secInOneWeek) this.lineColor = 'blue';
  };

  ngOnInit(): void {
    this.paintLine();
  }
}
