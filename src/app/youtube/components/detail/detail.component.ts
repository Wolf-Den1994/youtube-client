import {
  Component,
  OnInit,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { IItem, IVideo } from '../../models/youtube-video.model';

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
      .get<IVideo>('assets/mocks/response.json')
      .subscribe(({ items }) => {
        this.item = items.find(
          ({ id }) => id === this.route.snapshot.params['id']
        );
        if (!this.item) this.router.navigate(['error']);
      });
  }

  backToHome = () => {
    this.router.navigate(['']);
  };
}
