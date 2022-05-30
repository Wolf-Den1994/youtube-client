import {
  ActionReducerMap,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { filterReducer, FilterState } from './filters';
import { headerReducer, HeaderState } from './header';
import { madeItemReducer, MadeItemState } from './madeItem';
import { MADE_ITEM_KEY, HEADER_KEY, FILTER_KEY } from '../keys';

export interface State {
  [FILTER_KEY]: FilterState;
  [HEADER_KEY]: HeaderState;
  [MADE_ITEM_KEY]: MadeItemState;
}

export const reducers: ActionReducerMap<State> = {
  [FILTER_KEY]: filterReducer,
  [HEADER_KEY]: headerReducer,
  [MADE_ITEM_KEY]: madeItemReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
