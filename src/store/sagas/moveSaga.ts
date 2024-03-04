import { call, put, takeLatest } from 'redux-saga/effects';
import { makeMove } from '../actions/actions';

export function* moveSaga(action) {
  const { dx, dy, ds } = action.payload;
  try {
    yield put(makeMove(dx, dy, ds));
  } catch (error) {
    // Handle error
  }
}
