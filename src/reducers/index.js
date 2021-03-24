import { combineReducers } from 'redux';
import newProjectReducer from './newProjectReducer';
import userInfoReducer from './userInfoReducer';
import loginReducer from './loginReducer';
import tagDataReducer from './tagDataReducer';

const rootReducer = combineReducers({
  newProjectReducer,
  userInfoReducer,
  loginReducer,
  tagDataReducer,
});

export default rootReducer;
