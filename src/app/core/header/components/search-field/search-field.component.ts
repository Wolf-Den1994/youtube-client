import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { YoutubeService } from '../../../../youtube/services/youtube.service';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss'],
})
export class SearchFieldComponent implements OnInit {
  constructor(
    public youtubeService: YoutubeService,
  ) {}

  searchWord = new Subject<Event>();

  ngOnInit() {
    this.searchWord.pipe(
      debounceTime(3000),
      distinctUntilChanged(),
    ).subscribe((ev: Event) => {
      const querySearch = (ev.target as HTMLInputElement).value;
      if (querySearch.length >= 3) {
        this.youtubeService.setSearchValue(querySearch);
      }
    });
  }
}
