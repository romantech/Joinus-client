const myThunk = store => next => action => {
  // 액션 생성 함수 -> 미들웨어 -> 리듀서 -> 스토어 -> 컴포넌트
  // store : 리덕스 스토어 인스턴스
  // next : 액션을 다음 미들웨어에게 전달하는 함수

  return typeof action === 'function'
    ? action(store.dispatch, store.getState)
    : next(action);
};

export default myThunk;
