import {
  props, createAction, createReducer, on, createFeatureSelector, createSelector,
} from '@ngrx/store';
import { ICard } from '../../models/card.model';

export const MADE_ITEM_KEY = 'madeItem';

export const createItem = createAction('[ADMIN] create item', props<{ item: ICard }>());
export const setSearchValue = createAction('[SEARCH] search value', props<{ world: string }>());
export const setSearchItems = createAction('[SEARCH] search items', props<{ items: ICard[] }>());

export interface MadeItemState {
  items: ICard[];
  isShowResults: boolean;
}

export const initialState: MadeItemState = {
  items: [],
  isShowResults: false,
};

export const madeItemReducer = createReducer(
  initialState,
  on(createItem, (state, { item }) => {
    console.log('item', item);
    return {
      ...state,
      items: [...state.items, item],
      isShowResults: !!state.items.length,
    };
  }),
  on(setSearchValue, (state) => ({
    ...state,
  })),
  on(setSearchItems, (state, { items }) => ({
    ...state,
    items,
    isShowResults: !!items.length,
  })),
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
