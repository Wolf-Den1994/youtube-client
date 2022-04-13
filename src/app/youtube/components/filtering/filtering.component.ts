import { Component } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-filtering',
  templateUrl: './filtering.component.html',
  styleUrls: ['./filtering.component.scss'],
})
export class FilteringComponent {
  constructor(
    public youtubeService: YoutubeService,
  ) {}

  startSort = (content: string) => {
    if (content === 'Date') {
      this.youtubeService.handleSortDate();
    } else {
      this.youtubeService.handleSortViews();
    }
  };

  startFilter = (query: string) => {
    this.youtubeService.handleFilterWords(query);
  };
}
