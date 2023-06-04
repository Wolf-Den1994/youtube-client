import { createReducer, on } from '@ngrx/store';
import { hideHeader, showHeader } from '../actions/actions';

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
