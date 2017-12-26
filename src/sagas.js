import { all } from 'redux-saga/effects';

import { counterSagas } from './components/Counter/sagas';


export default function* sagas() {
  yield all([
    ...counterSagas
  ]);
}
