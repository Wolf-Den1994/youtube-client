import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-more-button',
  templateUrl: './more-button.component.html',
  styleUrls: ['./more-button.component.scss'],
})
export class MoreButtonComponent {
  constructor(
    private router: Router,
  ) {}

  @Input() id!: string;

  @Input() isCustom!: boolean | undefined;

  showMore() {
    this.router.navigate([`detail/${this.id}`]);
  }
}
