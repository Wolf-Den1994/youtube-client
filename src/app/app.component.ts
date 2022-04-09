import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'youtube-client';

  isShowFilters = false;

  toggleShowFilter = () => {
    console.log(555);
    this.isShowFilters = !this.isShowFilters;
  };
}
