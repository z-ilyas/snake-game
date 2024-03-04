import { all } from 'redux-saga/effects';
import { watcherSaga } from './watcherSaga';

export function* rootSaga() {
  yield all([
    watcherSaga(),
  ]);
}
