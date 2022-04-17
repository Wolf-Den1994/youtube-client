import { Component, OnInit } from '@angular/core';
import { YoutubeService } from './services/youtube.service';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss'],
})
export class YoutubeComponent implements OnInit {
  constructor(
    public youtubeService: YoutubeService,
  ) {}

  ngOnInit() {
    this.youtubeService.isShowHeader = true;
  }
}
