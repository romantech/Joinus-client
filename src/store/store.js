/* eslint-disable no-unused-vars */
import { applyMiddleware, createStore } from 'redux';
import { logger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers/index';

const middlewares = [ReduxThunk, logger];

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk)),
);
export const persistor = persistStore(store);
