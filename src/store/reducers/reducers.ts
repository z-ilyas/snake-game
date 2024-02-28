import { combineReducers } from 'redux';
import { IGlobalState } from './globalStateReducer.ts';
import { globalState } from './globalStateReducer.ts';


const snakeReducer = (state = globalState.snake, action) => {
  // Handle actions here
  return state;
};

const rootReducer = combineReducers({
  snake: snakeReducer
});

export default rootReducer;

