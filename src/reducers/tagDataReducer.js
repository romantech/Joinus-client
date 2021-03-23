import { SET_TAG } from '../actions/index.js';
import { initialState } from './initialState.js';

// 이니셜 상태 임포트
const tagDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TAG:
      return Object.assign({}, state, {
        renderData: [...state.renderData, action.payload]
      })
    default:
      return state;
  }
};

// 리듀서 쓰고 내보내기
export default tagDataReducer;
