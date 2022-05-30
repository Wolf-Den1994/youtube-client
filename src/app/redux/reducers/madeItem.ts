import { createReducer, on } from '@ngrx/store';
import {
  createItem, handleFilterWords, handleSortDate, handleSortViews, setSearchItems, setSearchValue,
} from '../actions/actions';
import { filter } from '../../utils/filter';
import { ICard } from '../../models/card.model';

export interface MadeItemState {
  items: ICard[];
  result: ICard[];
  isShowResults: boolean;
  sortDate: string;
  sortViews: string;
  isLoading: boolean;
  isLoaded: boolean;
}

export const initialState: MadeItemState = {
  items: [],
  result: [],
  isShowResults: false,
  sortDate: 'asc',
  sortViews: 'asc',
  isLoading: false,
  isLoaded: false,
};

export const madeItemReducer = createReducer(
  initialState,
  on(createItem, (state, { item }) => ({
    ...state,
    items: [...state.items, item],
    result: [...state.items, item],
    isShowResults: !!state.items.length,
  })),
  on(setSearchValue, (state) => ({
    ...state,
    isLoading: true,
    isLoaded: false,
  })),
  on(setSearchItems, (state, { items }) => ({
    ...state,
    items,
    result: items,
    isShowResults: !!items.length,
    isLoading: false,
    isLoaded: true,
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
  on(handleFilterWords, (state, { word }) => {
    const copy = [...state.result];
    if (word) {
      return { ...state, items: filter(word, copy) };
    }
    return { ...state, items: state.result };
  }),
);
