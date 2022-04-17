import { Component } from '@angular/core';
import { YoutubeService } from '../../../../youtube/services/youtube.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  constructor(
    public youtubeService: YoutubeService,
  ) {}

  handleShowFilter() {
    this.youtubeService.toggleShowFilter();
  }
}
