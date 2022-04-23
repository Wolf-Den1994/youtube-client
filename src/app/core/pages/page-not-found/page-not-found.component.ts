import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { hideHeader } from '../../../redux/actions/actions';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
})
export class PageNotFoundComponent implements OnInit {
  constructor(
    private router: Router,
    private store: Store,
  ) {}

  ngOnInit(): void {
    this.store.dispatch(hideHeader());
  }

  backToHome() {
    this.router.navigate(['']);
  }
}
