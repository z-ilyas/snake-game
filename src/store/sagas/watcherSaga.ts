import { takeLatest } from 'redux-saga/effects';
import { MOVE_RIGHT, MOVE_LEFT, MOVE_UP, MOVE_DOWN } from '../store/actions/actions';
import { moveSaga } from './moveSaga';

export function* watcherSaga() {
    yield takeLatest(
        [MOVE_RIGHT, MOVE_LEFT, MOVE_UP, MOVE_DOWN],
        moveSaga
    );
}