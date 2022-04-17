import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { YoutubeService } from './services/youtube.service';
import { IVideo } from './models/youtube-video.model';
import { IVideoHttp } from './models/youtube-http.model';
import { API_KEY, URL_SERVER, URL_VIDEO } from '../../utils/constants';

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

  itemIds: string[] = [];

  ngOnInit() {
    this.youtubeService.isShowHeader = true;
    this.http.get<IVideoHttp>(URL_VIDEO).subscribe(({ items }) => {
      this.itemIds = items.map(({ id }) => id.videoId);
      const requestUrl = `${URL_SERVER}/videos?key=${API_KEY}&id=${this.itemIds.join(',')}&part=snippet,statistics`;
      this.http.get<IVideo>(requestUrl).subscribe(({ items: videosItems }) => {
        this.youtubeService.result = videosItems;
        this.youtubeService.items = videosItems;
      });
    });
  }
}
