import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { YoutubeService } from '../../../../youtube/services/youtube.service';
import { toggleShowFilter } from '../../../../redux/actions/actions';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  constructor(
    public youtubeService: YoutubeService,
    private store: Store,
  ) {}

  handleShowFilter() {
    // this.youtubeService.toggleShowFilter();
    this.store.dispatch(toggleShowFilter());
  }
}
