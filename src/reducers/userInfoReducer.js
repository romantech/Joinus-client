// 액션 임포트
import { SET_USER_INFO } from '../actions/index';
import { initialState } from './initialState';

// 이니셜 상태 임포트
const userInfoReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_USER_INFO:
      return { ...state, userInfo: action.payload };
    default:
      return state;
  }
};

// 리듀서 쓰고 내보내기
export default userInfoReducer;
