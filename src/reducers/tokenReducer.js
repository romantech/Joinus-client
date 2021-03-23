
// 액션 임포트
import { SET_TOKEN } from '../actions/index.js';
import { initialState } from './initialState.js';

// 이니셜 상태 임포트
const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return { ...state, token: action.payload };
    default:
      return state;
  }
};

// 리듀서 쓰고 내보내기
export default tokenReducer;
