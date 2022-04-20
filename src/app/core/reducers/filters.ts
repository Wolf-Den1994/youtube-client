import {
  createAction, createFeatureSelector, createReducer, createSelector, on,
} from '@ngrx/store';

export const toggleShowFilter = createAction('[FILTERS] toggleShowFilter');

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

export const featureSelector = createFeatureSelector<FilterState>('filter');
export const isShowFilterSelector = createSelector(
  featureSelector,
  (state) => state.isShowFilters,
);
