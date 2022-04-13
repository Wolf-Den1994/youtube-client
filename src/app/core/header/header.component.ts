import { Component } from '@angular/core';
import { YoutubeService } from '../../youtube/services/youtube.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    private youtubeService: YoutubeService,
  ) {}

  changeShowFilter = () => {
    this.youtubeService.toggleShowFilter();
  };
}