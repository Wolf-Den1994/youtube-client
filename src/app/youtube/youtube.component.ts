import { Component } from '@angular/core';
import { FilterService } from './services/youtube.service';
// import { HttpClient } from '@angular/common/http';
// import { IVideo, IItem } from '../youtube/result-block/result-item/result-item.model';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss'],
})
export class YoutubeComponent {
  constructor(
    public filterService: FilterService,
  ) {}
}
