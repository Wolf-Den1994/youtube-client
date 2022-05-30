import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HEADER_KEY } from '../keys';
import { HeaderState } from '../reducers/header';

export const featureSelector = createFeatureSelector<HeaderState>(HEADER_KEY);
export const isShowHeaderSelector = createSelector(
  featureSelector,
  (state) => state.isShowHeader,
);
