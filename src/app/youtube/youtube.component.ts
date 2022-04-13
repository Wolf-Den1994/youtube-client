import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FilterService } from './services/youtube.service';
import { IVideo } from './result-block/result-item/result-item.model';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss'],
})
export class YoutubeComponent implements OnInit {
  constructor(
    public filterService: FilterService,
    private http: HttpClient,
  ) {}

  ngOnInit() {
    this.http.get<IVideo>('assets/mocks/response.json').subscribe((data) => {
      this.filterService.result = data.items;
      this.filterService.items = data.items;
    });
  }
}
