import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { isShowResultsSelector, searchItemsSelector } from '../redux/selectors/madeItem';
import { showHeader } from '../redux/actions/actions';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss'],
})
export class YoutubeComponent implements OnInit {
  searchItems$ = this.store.select(searchItemsSelector);

  isShowResults$ = this.store.select(isShowResultsSelector);

  constructor(
    private store: Store,
  ) {}

  ngOnInit() {
    this.store.dispatch(showHeader());
  }
}
