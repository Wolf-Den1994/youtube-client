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

export interface State {
  [FILTER_KEY]: FilterState,
  header: HeaderState,
}

export const reducers: ActionReducerMap<State> = {
  [FILTER_KEY]: filterReducer,
  header: headerReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
