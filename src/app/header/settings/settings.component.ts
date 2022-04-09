import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  @Input() isShowFilters!: boolean;

  @Input() changeShowFilter!: Function;

  handleShowFilter = () => {
    this.changeShowFilter();
  };
}
