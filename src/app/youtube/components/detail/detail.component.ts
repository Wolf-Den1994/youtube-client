import {
  Component,
  OnInit,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { IItem, IVideo } from '../../models/youtube-video.model';
import {
  API_KEY, URL_SERVER, URL_VIDEOS, Query,
} from '../../../../utils/constants';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
  ) {}

  item?: IItem;

  ngOnInit() {
    this.http
      .get<IVideo>(`${URL_VIDEOS}&id=${this.route.snapshot.params['id']}&part=${Query.Part}`)
      .subscribe(({ items }) => {
        const [item] = items;
        this.item = item;
        if (!this.item) this.router.navigate(['error']);
      });
  }

  backToHome() {
    this.router.navigate(['']);
  }
}
