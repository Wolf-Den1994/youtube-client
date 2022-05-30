import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { createItem } from '../../redux/actions/actions';
import { ICustomItem } from '../../models/customItem';

@Injectable({
  providedIn: 'root',
})

export class AdminService {
  constructor(
    private router: Router,
    private store: Store,
  ) {}

  goAdminPage() {
    this.router.navigate(['/admin']);
  }

  create = ({ title, img: src, date: publishedAt }: ICustomItem) => {
    this.store.dispatch(createItem({
      item: {
        id: String(Date.now()),
        src,
        title,
        publishedAt,
        view: '0',
        like: '0',
        comment: '0',
        dislike: undefined,
        isCustom: true,
      },
    }));
  };
}
