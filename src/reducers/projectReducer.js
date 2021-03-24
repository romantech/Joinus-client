// 액션 임포트
import { SET_PROJECTLIST } from '../actions/index';
import { initialState } from './initialState';
// 이니셜 상태 임포트
const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROJECTLIST:
      return { ...state, projects: action.payload };
    default:
      return state;
  }
};
// 리듀서 쓰고 내보내기
export default projectReducer;
