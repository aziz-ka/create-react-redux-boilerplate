import { delay } from 'redux-saga';
import { call, fork, put, takeEvery } from 'redux-saga/effects';

import { ACTIONS } from './constants';
import { increaseCounterDelayedDone } from './actions';


function* increaseCounterDelayed({ payload }) {
  try {
    yield call(delay, 3000);
    yield put(increaseCounterDelayedDone());
  }
  catch (error) {
    console.error('something went wrong', error);
  }
}


export const counterSagas = [
  fork(takeEvery, ACTIONS.INCREASE_DELAYED, increaseCounterDelayed)
];
