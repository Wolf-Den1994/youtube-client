import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { YoutubeService } from '../../youtube/services/youtube.service';
import { IItem } from '../../models/youtube-video.model';

@Injectable({
  providedIn: 'root',
})

export class AdminService {
  constructor(
    private router: Router,
    private youtubeService: YoutubeService,
  ) {}

  goAdminPage() {
    this.router.navigate(['/admin']);
  }

  create = (data: IItem) => {
    this.youtubeService.result.push(data);
  };
}
