import { combineReducers, legacy_createStore as createStore } from "redux";

let reducers = combineReducers({});

let store = createStore(reducers);

export default store;
