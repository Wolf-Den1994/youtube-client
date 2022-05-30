import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { map, switchMap } from 'rxjs/operators';
import { ApiService } from '../../shared/services/api.service';
import { setSearchItems, setSearchValue } from '../actions/actions';
import { CoreService } from '../../core/services/core.service';
import { IItem } from '../../models/youtube-video.model';

@Injectable({ providedIn: 'root' })
export class CoreEffects {
  constructor(
    private actions: Actions,
    private apiService: ApiService,
    private coreService: CoreService,
  ) {}

  setSearchValue: Observable<Action> = createEffect(() => this.actions.pipe(
    ofType(setSearchValue),
    switchMap(({ word }) => this.apiService.getVideosId(word).pipe(
      switchMap(({ items }) => {
        const itemIds = items.map(({ id }) => id.videoId);
        return this.apiService.getVideoItems(itemIds).pipe(
          map(({ items: videosItems }) => {
            const resultSearch = videosItems.map((video: IItem) => this.coreService.transformItems(video));
            return setSearchItems({ items: resultSearch });
          }),
        );
      }),
    )),
  ));
}
