import { Component, Input } from '@angular/core';
import { YoutubeService } from '../../../../services/youtube.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  constructor(
    public youtubeService: YoutubeService,
  ) {}

  value = '';

  inputHandle(newValue: string) {
    this.value = newValue;
    this.youtubeService.handleFilterWords(newValue);
  }
}
