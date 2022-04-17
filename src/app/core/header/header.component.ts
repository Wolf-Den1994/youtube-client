import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { YoutubeService } from '../../youtube/services/youtube.service';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  private subscription: Subscription;

  constructor(
    private authService: AuthService,
    public youtubeService: YoutubeService,
  ) {
    this.subscription = this.authService.authState$.subscribe((value) => {
      if (value) this.youtubeService.showHeader();
      else this.youtubeService.hideHeader();
    });
  }
}
