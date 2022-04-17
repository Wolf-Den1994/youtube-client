import { Component, Input } from '@angular/core';
import { YoutubeService } from '../../../../services/youtube.service';

@Component({
  selector: 'app-button-sort',
  templateUrl: './button-sort.component.html',
  styleUrls: ['./button-sort.component.scss'],
})
export class ButtonSortComponent {
  constructor(
    public youtubeService: YoutubeService,
  ) {}

  @Input() content!: string;

  handleClick(content: string) {
    if (content === 'Date') {
      this.youtubeService.handleSortDate();
    } else {
      this.youtubeService.handleSortViews();
    }
  }
}
