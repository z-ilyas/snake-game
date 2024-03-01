import { combineReducers } from 'redux';
import { IGlobalState } from './globalStateReducer.ts';
import { snakeReducer } from './globalStateReducer.ts';

const rootReducer = combineReducers({
  globalState: snakeReducer
});

export default rootReducer;
