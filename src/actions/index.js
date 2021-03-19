// * 액션 타입
export const ADD_NEW_PROJECT = 'ADD_NEW_PROJECT';
export const SET_USER_INFO = 'LOGIN_USER_INFO';
export const IS_LOGIN = 'IS_LOGIN';

// * 액션 생성 함수
export const addNewProject = (
  projectId,
  projectName,
  projectDesc,
  endDate,
  image,
) => {
  return {
    type: ADD_NEW_PROJECT,
    payload: { projectId, projectName, projectDesc, endDate, image },
  };
};

export const setUserInfo = (userId, email, name, desc, portfolio, stack) => {
  return {
    type: SET_USER_INFO,
    payload: { userId, email, name, desc, portfolio, stack },
  };
};

export const setLoginStatus = boolean => {
  return {
    type: IS_LOGIN,
    payload: boolean,
  };
};
