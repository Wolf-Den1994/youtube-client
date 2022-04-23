import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { YoutubeService } from '../../../../services/youtube.service';
import { handleFilterWords } from '../../../../../redux/actions/actions';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  constructor(
    public youtubeService: YoutubeService,
    private store: Store,
  ) {}

  value = '';

  inputHandle(newValue: string) {
    this.value = newValue;
    // this.store.dispatch(handleFilterWords());
    // this.youtubeService.handleFilterWords(newValue); // !!!
  }
}
