/* eslint-disable import/extensions */
import { combineReducers } from 'redux';
import projectListReducer from './projectListReducer.js';

const rootReducer = combineReducers({
  projectListReducer,
});

// console.log(rootReducer);

export default rootReducer;
