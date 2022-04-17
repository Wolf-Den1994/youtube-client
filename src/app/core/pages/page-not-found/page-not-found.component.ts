import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { YoutubeService } from '../../../youtube/services/youtube.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
})
export class PageNotFoundComponent implements OnInit {
  constructor(
    public youtubeService: YoutubeService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.youtubeService.hideHeader();
  }

  backToHome() {
    this.router.navigate(['']);
  }
}
