import { createSelector } from '@ngrx/store';
import { getAppState } from '../app.selector';

export const getRouterState = createSelector(
  getAppState,
  state => state.routerReducer,
);
