/* eslint-disable camelcase */
/* eslint-disable react/jsx-pascal-case */
import React, { useState } from 'react';
import Volunteer_modal from './MyProjects_modal';

export default function Myprojects({ userInfoDetail, ProjectDelete }) {
  const [projectModal, setprojectModal] = useState(false);
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
                      setprojectModal(true);
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
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Volunteer_modal trigger={projectModal} setTrigger={setprojectModal}>
        {/* {projectVolunteer.map((list) => {
          return (
            <div className="volunteer_list">
              <p>{list.userName}</p>
              <p>{list.userEmail}</p>
              <p>{list.stack}</p>
              <div>
                <button onClick={() => {}}>수락</button>
                <button onClick={() => {}}>거절</button>
              </div>
            </div>
          );
        })} */}
      </Volunteer_modal>
    </div>
  );
}
