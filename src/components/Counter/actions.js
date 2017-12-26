import { ACTIONS } from './constants';


export const increaseCounter = payload => ({
  type: ACTIONS.INCREASE,
  payload
});

export const increaseCounterDelayed = payload => ({
  type: ACTIONS.INCREASE_DELAYED,
  payload
});

export const increaseCounterDelayedDone = payload => ({
  type: ACTIONS.INCREASE,
  payload
});

export const resetCounter = payload => ({
  type: ACTIONS.RESET,
  payload
});
