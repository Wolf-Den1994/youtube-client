import {
  createAction, createFeatureSelector, createReducer, createSelector, on,
} from '@ngrx/store';

export const showHeader = createAction('[HEADER] show header');
export const hideHeader = createAction('[HEADER] hide header');

export interface HeaderState {
  isShowHeader: boolean;
}

export const initialState: HeaderState = {
  isShowHeader: true,
};

export const headerReducer = createReducer(
  initialState,
  on(showHeader, (state) => ({
    ...state,
    isShowHeader: true,
  })),
  on(hideHeader, (state) => ({
    ...state,
    isShowHeader: false,
  })),
);

export const featureSelector = createFeatureSelector<HeaderState>('header');
export const isShowHeaderSelector = createSelector(
  featureSelector,
  (state) => state.isShowHeader,
);
