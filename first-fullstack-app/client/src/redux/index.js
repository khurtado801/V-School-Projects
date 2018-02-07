import {createStore, combineReducers} from "redux";
import count from './count.js';

// This is the store
let store = createStore(combineReducers({count}));

export default store;