import React, { useState, useEffect } from "react";
import Axios from "axios";
import Volunteer_modal from "./myProjects_modal";
import { fakeData } from "./fakeData";
import { fakeUserInfo } from "./fakeUserInfo";

export default function Myprojects() {
  const [project_list, setproject_list] = useState(fakeData);
  const [projectModal, setprojectModal] = useState(false);
  const [userInfo, setUserInfo] = useState(fakeUserInfo);

  return (
    <div className="myProfile-body">
      <h2>생성한 프로젝트</h2>
      <div className="myProfile-border">
        <div className="">
          {project_list.map((list) => {
            return (
              <div key={list.id} className="myProject_list">
                <h3>{list.title}</h3>
                <div className="myProject_right">
                  <button
                    onClick={() => {
                      setprojectModal(true);
                    }}
                  >
                    신청자 목록
                  </button>
                  <button>수정</button>
                  <button>삭제</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Volunteer_modal trigger={projectModal} setTrigger={setprojectModal}>
        <div className="">
          {userInfo.map((list) => {
            return (
              <div>
                <p>{list.userName}</p>
                <p>{list.userEmail}</p>
                <p>{list.stack}</p>
                <button>수락</button>
                <button>거절</button>
              </div>
            );
          })}
        </div>
      </Volunteer_modal>
    </div>
  );
}
