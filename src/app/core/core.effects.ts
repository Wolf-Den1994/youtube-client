import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { map, switchMap } from 'rxjs/operators';
import { ApiService } from '../shared/services/api.service';
import { setSearchItems, setSearchValue } from './reducers/madeItem';
import { YoutubeService } from '../youtube/services/youtube.service';
import { CoreService } from './services/core.service';

@Injectable({ providedIn: 'root' })
export class CoreEffects {
  constructor(
    private actions: Actions,
    private apiService: ApiService,
    private youtubeService: YoutubeService,
    private coreService: CoreService,
  ) {}

  setSearchValue: Observable<Action> = createEffect(() => this.actions.pipe(
    ofType(setSearchValue),
    switchMap(({ world }) => this.apiService.getVideosId(world).pipe(
      switchMap(({ items }) => {
        const itemIds = items.map(({ id }) => id.videoId);
        return this.apiService.getVideoItems(itemIds).pipe(
          map(({ items: videosItems }) => {
            const resultSearch = videosItems.map((video: any) => this.coreService.transformItems(video));
            return setSearchItems({ items: resultSearch });
          }),
        );
      }),
    )),
  ));
}
