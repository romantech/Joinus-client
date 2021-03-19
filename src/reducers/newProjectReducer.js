// 액션 임포트
import { ADD_NEW_PROJECT } from '../actions/index';
import { initialState } from './initialState';

// 이니셜 상태 임포트
const newProjectReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_PROJECT:
      return { ...state, projects: [...state.projects, action.payload] };
    default:
      return state;
  }
};

// 리듀서 쓰고 내보내기
export default newProjectReducer;
