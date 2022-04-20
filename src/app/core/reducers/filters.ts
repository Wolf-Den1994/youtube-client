import {
  createAction, createFeatureSelector, createReducer, createSelector, on,
} from '@ngrx/store';

export const FILTER_KEY = 'filter';

export const toggleShowFilter = createAction('[FILTERS] toggle show filter');

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

export const featureSelector = createFeatureSelector<FilterState>(FILTER_KEY);
export const isShowFilterSelector = createSelector(
  featureSelector,
  (state) => state.isShowFilters,
);
