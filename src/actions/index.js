import axios from 'axios';

// * 액션 타입
export const ADD_NEW_PROJECT = 'ADD_NEW_PROJECT';
export const SET_USER_INFO = 'LOGIN_USER_INFO';
export const IS_LOGIN = 'IS_LOGIN';
export const SET_TAG = 'SET_TAG';
export const SET_PROJECTLIST = 'SET_PROJECTLIST';

// * thunk 미들웨어 이용한 비동기 호출
export const fetchData = (api, action) => async dispatch => {
  try {
    const res = await axios.get(api);
    dispatch(action(res.data.data));
  } catch (err) {
    console.log(err.message);
  }

  // console.log(api, dispatch);
  // return fetch(api)
  //   .then(res => res.json())
  //   .then(data => {
  //     dispatch(action(data.data));
  //   })
  //   .catch(err => console.log(err));
};

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

export const setUserInfo = userInfo => {
  return {
    type: SET_USER_INFO,
    payload: userInfo,
  };
};

export const setLoginStatus = boolean => {
  return {
    type: IS_LOGIN,
    payload: boolean,
  };
};

export const setRenderData = renderData => {
  return {
    type: SET_TAG,
    payload: renderData,
  };
};

export const setProjectList = projectList => {
  return {
    type: SET_PROJECTLIST,
    payload: projectList,
  };
};
