/* eslint-disable import/extensions */
import { combineReducers } from 'redux';
import newProjectReducer from './newProjectReducer.js';
import userInfoReducer from './userInfoReducer.js';
import loginReducer from './loginReducer.js';
import tokenReducer from './tokenReducer.js';

const rootReducer = combineReducers({
  newProjectReducer,
  userInfoReducer,
  loginReducer,
  tokenReducer,
});

export default rootReducer;
