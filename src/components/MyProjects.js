/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/jsx-pascal-case */
/* eslint-disable camelcase */
/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import React, { useState } from 'react';
import Volunteer_modal from './MyProjects_modal';
import Test from './Test';

export default function Myprojects({ userInfoDetail, ProjectDelete }) {
  // const [projectModal, setprojectModal] = useState(false);
  const projectModal = false;
  const setprojectModal = function (projectModal) {
    return (projectModal = !projectModal);
  };

  return (
    <div className="myProfile-body">
      <div className="myProfile-border">
        <h2>생성한 프로젝트</h2>
        <div className="project_list">
          {userInfoDetail.myProject.map(list => {
            return (
              <div key={list.projectId} className="myProject_list">
                <span>{list.projectName}</span>
                <div className="myProject_right">
                  <button
                    onClick={() => {
                      setprojectModal(projectModal);
                    }}
                  >
                    신청자 목록
                  </button>
                  <button>수정</button>
                  <button
                    onClick={() => {
                      ProjectDelete(list.projectId);
                    }}
                  >
                    삭제
                  </button>
                  <Volunteer_modal
                    trigger={projectModal}
                    setTrigger={setprojectModal}
                    projectId={list.projectId}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
