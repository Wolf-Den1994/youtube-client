import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { filterReducer, FilterState } from './filters';
import { headerReducer, HeaderState } from './header';

export interface State {
  filter: FilterState,
  header: HeaderState,
}

export const reducers: ActionReducerMap<State> = {
  filter: filterReducer,
  header: headerReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
