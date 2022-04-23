import { createReducer, on } from '@ngrx/store';
import {
  createItem, handleFilterWords, handleSortDate, handleSortViews, setSearchItems, setSearchValue,
} from '../actions/actions';
import { ICard } from '../../models/card.model';

export interface MadeItemState {
  items: ICard[];
  isShowResults: boolean;
  sortDate: string;
  sortViews: string;
}

export const initialState: MadeItemState = {
  items: [],
  isShowResults: false,
  sortDate: 'asc',
  sortViews: 'asc',
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
  on(handleSortDate, (state) => {
    const copy = [...state.items];
    if (state.sortDate === 'asc') {
      return {
        ...state,
        sortDate: 'desc',
        items: copy.sort((a, b) => (a.publishedAt > b.publishedAt ? 1 : -1)),
      };
    }
    return {
      ...state,
      sortDate: 'asc',
      items: copy.sort((a, b) => (a.publishedAt > b.publishedAt ? -1 : 1)),
    };
  }),
  on(handleSortViews, (state) => {
    const copy = [...state.items];
    if (state.sortViews === 'asc') {
      return {
        ...state,
        sortViews: 'desc',
        items: copy.sort((a, b) => (+a.view > +b.view ? 1 : -1)),
      };
    }
    return {
      ...state,
      sortViews: 'asc',
      items: copy.sort((a, b) => (+a.view > +b.view ? -1 : 1)),
    };
  }),
  // on(handleFilterWords, (state) => {
  //   const copy = [...state.items];
  //
  // }),
);
