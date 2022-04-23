import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { setSearchValue } from '../../../../redux/actions/actions';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss'],
})
export class SearchFieldComponent implements OnInit {
  constructor(
    private store: Store,
    private router: Router,
  ) {}

  searchWord = new Subject<Event>();

  ngOnInit() {
    this.searchWord.pipe(
      debounceTime(1100),
      distinctUntilChanged(),
    ).subscribe((ev: Event) => {
      const querySearch = (ev.target as HTMLInputElement).value;
      if (querySearch.length >= 3) {
        this.store.dispatch(setSearchValue({ world: querySearch }));
        this.router.navigate(['/']); // not working ???
      }
    });
  }
}
