import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MADE_ITEM_KEY } from '../keys';
import { MadeItemState } from '../reducers/madeItem';

export const featureSelector = createFeatureSelector<MadeItemState>(MADE_ITEM_KEY);
export const searchItemsSelector = createSelector(
  featureSelector,
  (state) => state.items,
);
export const isShowResultsSelector = createSelector(
  featureSelector,
  (state) => state.isShowResults,
);
export const isLoadingSelector = createSelector(
  featureSelector,
  (state) => state.isLoading,
);
export const isLoadedSelector = createSelector(
  featureSelector,
  (state) => state.isLoaded,
);
