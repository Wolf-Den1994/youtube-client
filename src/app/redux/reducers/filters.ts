import { createReducer, on } from '@ngrx/store';
import { toggleShowFilter } from '../actions/actions';

export interface FilterState {
  isShowFilters: boolean;
}

export const initialState: FilterState = {
  isShowFilters: false,
};

export const filterReducer = createReducer(
  initialState,
  on(toggleShowFilter, (state) => ({
    ...state,
    isShowFilters: !state.isShowFilters,
  })),
);
