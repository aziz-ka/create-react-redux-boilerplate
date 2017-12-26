import { createSelector } from 'reselect';


export const getCounter = createSelector(
  state => state.ui.counter,
  counter => counter
);
