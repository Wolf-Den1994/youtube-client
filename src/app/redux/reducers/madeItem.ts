import { createReducer, on } from '@ngrx/store';
import { createItem, setSearchItems, setSearchValue } from '../actions/actions';
import { ICard } from '../../models/card.model';

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
  on(createItem, (state, { item }) => ({
    ...state,
    items: [...state.items, item],
    isShowResults: !!state.items.length,
  })),
  on(setSearchValue, (state) => ({
    ...state,
  })),
  on(setSearchItems, (state, { items }) => ({
    ...state,
    items,
    isShowResults: !!items.length,
  })),
);
