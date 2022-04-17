import { Component, Input } from '@angular/core';
import { YoutubeService } from '../../../../youtube/services/youtube.service';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss'],
})
export class SearchFieldComponent {
  constructor(
    public youtubeService: YoutubeService,
  ) {}

  inputHandle = (value: string) => {
    this.youtubeService.setSearchValue(value);
  };

  handleSearch() {
    this.youtubeService.handleSearch();
  }
}
