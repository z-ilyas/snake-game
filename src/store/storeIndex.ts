import {
    createStore,
    applyMiddleware
} from "redux";
import createSagaMiddleware from "redux-saga";
import gameReducer from "./reducers/reducers.ts";
import { rootSaga } from "./sagas/sagas.ts";
const sagaMiddleware = createSagaMiddleware();

const store = createStore(gameReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
export default store;