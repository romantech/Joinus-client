/* eslint-disable import/extensions */
import { combineReducers } from 'redux';
import newProjectReducer from './newProjectReducer.js';
import userInfoReducer from './userInfoReducer.js';
import loginReducer from './loginReducer.js';

const rootReducer = combineReducers({
  newProjectReducer,
  userInfoReducer,
  loginReducer,
});

export default rootReducer;
