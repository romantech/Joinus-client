import { createStore } from 'redux';
import { persistStore } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension'; // 리덕스 개발자도구
import rootReducer from '../reducers/index';

// createStore(reducer, initialState, enhancer)

export const store = createStore(rootReducer, composeWithDevTools());
export const persistor = persistStore(store);

// console.log(store.getState());

export default { store, persistor };
