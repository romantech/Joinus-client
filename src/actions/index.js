// * 액션 타입
export const ADD_NEW_PROJECT = 'ADD_NEW_PROJECT';

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
