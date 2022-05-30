import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FILTER_KEY } from '../keys';
import { FilterState } from '../reducers/filters';

export const featureSelector = createFeatureSelector<FilterState>(FILTER_KEY);
export const isShowFilterSelector = createSelector(
  featureSelector,
  (state) => state.isShowFilters,
);
