import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { YoutubeService } from './services/youtube.service';
import { IVideo } from './models/youtube-video.model';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss'],
})
export class YoutubeComponent implements OnInit {
  constructor(
    public youtubeService: YoutubeService,
    private http: HttpClient,
  ) {}

  ngOnInit() {
    this.youtubeService.isShowHeader = true;
    this.http.get<IVideo>('assets/mocks/response.json').subscribe((data) => {
      this.youtubeService.result = data.items;
      this.youtubeService.items = data.items;
    });
  }
}
