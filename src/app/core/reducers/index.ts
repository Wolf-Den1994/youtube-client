import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { filterReducer, FilterState, FILTER_KEY } from './filters';
import { headerReducer, HeaderState } from './header';
import { MADE_ITEM_KEY, madeItemReducer, MadeItemState } from './madeItem';

export interface State {
  [FILTER_KEY]: FilterState,
  header: HeaderState,
  [MADE_ITEM_KEY]: MadeItemState
}

export const reducers: ActionReducerMap<State> = {
  [FILTER_KEY]: filterReducer,
  header: headerReducer,
  [MADE_ITEM_KEY]: madeItemReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
