// * 액션 타입
export const ADD_NEW_PROJECT = 'ADD_NEW_PROJECT';
export const SET_USER_INFO = 'LOGIN_USER_INFO';
export const IS_LOGIN = 'IS_LOGIN';
export const SET_TOKEN = 'SET_TOKEN';

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

export const setUserInfo = (
  userId,
  userEmail,
  userName,
  company,
  portfolios,
  stacks,
) => {
  return {
    type: SET_USER_INFO,
    payload: { userId, userEmail, userName, company, portfolios, stacks },
  };
};

export const setLoginStatus = boolean => {
  return {
    type: IS_LOGIN,
    payload: boolean,
  };
};

export const setToken = accessToken => {
  return {
    type: SET_TOKEN,
    payload: { accessToken },
  };
};
