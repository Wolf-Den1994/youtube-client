import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../../youtube/services/youtube.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
})
export class PageNotFoundComponent implements OnInit {
  constructor(
    public youtubeService: YoutubeService,
  ) {}

  ngOnInit(): void {
    this.youtubeService.isShowHeader = false;
  }
}
