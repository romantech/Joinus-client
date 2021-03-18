/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
// 액션 임포트
import { ADD_NEW_PROJECT } from '../actions/index.js';
import { initialState } from './initialState.js';

// 이니셜 상태 임포트
const projectListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_PROJECT:
      return { ...state, projects: [...state.projects, action.payload] };
    // 생략
    default:
      return state;
  }
};

console.log(projectListReducer);

// 리듀서 쓰고 내보내기
export default projectListReducer;
