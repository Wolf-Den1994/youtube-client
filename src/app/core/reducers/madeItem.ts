import {
  props, createAction, createReducer, on, createFeatureSelector, createSelector,
} from '@ngrx/store';
// import { IItem } from "../../youtube/models/youtube-video.model";

export const MADE_ITEM_KEY = 'madeItem';

export const createItem = createAction('[ADMIN] create item', props<{ item: any }>()); // TODO: позже

export const setSearchValue = createAction('[SEARCH] search value', props<{ world: string }>());

export const setSearchItems = createAction('[SEARCH] search items', props<{ items: any[] }>());

export const showResults = createAction('[YOUTUBE] show result');

export interface MadeItemState {
  items: any
  isShowResults: boolean
}

export const initialState: MadeItemState = {
  items: [],
  isShowResults: false,
};

export const madeItemReducer = createReducer(
  initialState,
  on(createItem, (state, { item }: any) => {
    console.log('item', item);
    return {
      ...state,
      items: [...state.items, item],
    };
  }),
  on(setSearchValue, (state) => {
    console.log('state', state);
    return {
      ...state,
      // items: [...state.items, items],
    };
  }),
  on(setSearchItems, (state, { items }: any) => {
    console.log('items', items);
    return {
      ...state,
      items,
      isShowResults: !!items.length,
    };
  }),
);

export const featureSelector = createFeatureSelector<MadeItemState>(MADE_ITEM_KEY);
export const searchItemsSelector = createSelector(
  featureSelector,
  (state) => state.items,
);
export const isShowResultsSelector = createSelector(
  featureSelector,
  (state) => state.isShowResults,
);
