import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { YoutubeService } from '../youtube/services/youtube.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  constructor(
    public authService: AuthService,
    private youtubeService: YoutubeService,
  ) {}

  ngOnInit() {
    this.youtubeService.isShowHeader = false;
  }
}
