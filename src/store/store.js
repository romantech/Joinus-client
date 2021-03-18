/* eslint-disable import/extensions */
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; // 리덕스 개발자도구
import rootReducer from '../reducers/index.js';

// createStore(reducer, initialState, enhancer)

const store = createStore(rootReducer, composeWithDevTools());

console.log(store.getState());

export default store;
