import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import newProjectReducer from './newProjectReducer';
import userInfoReducer from './userInfoReducer';
import loginReducer from './loginReducer';
import tagDataReducer from './tagDataReducer';
import projectReducer from './projectReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['loginReducer', 'userInfoReducer'],
};

const rootReducer = combineReducers({
  newProjectReducer,
  userInfoReducer,
  loginReducer,
  tagDataReducer,
  projectReducer,
});

export default persistReducer(persistConfig, rootReducer);
