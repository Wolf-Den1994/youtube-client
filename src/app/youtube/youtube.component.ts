import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { YoutubeService } from './services/youtube.service';
import { showHeader } from '../core/reducers/header';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss'],
})
export class YoutubeComponent implements OnInit {
  constructor(
    public youtubeService: YoutubeService,
    private store: Store,
  ) {}

  ngOnInit() {
    this.store.dispatch(showHeader());
  }
}
