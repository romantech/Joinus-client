import React, {useState} from "react";
import Volunteer_modal from "./myProjects_modal";


export default function Myprojects({project_list, userInfo, projectVolunteer, handleDelete}) {
  const [projectModal, setprojectModal] = useState(false);  //모달 state




  return (
    <div className="myProfile-body">
      <h2>생성한 프로젝트</h2>
      <div className="myProfile-border">
        <div className="project_list">
          {project_list.map((list) => {
            return (
              <div key={list.id} className="myProject_list">
                <h3>{list.projectName}</h3>
                <div className="myProject_right">
                  <button
                    onClick={() => {
                      setprojectModal(true);
                    }}
                  >
                    신청자 목록
                  </button>
                  <button>수정</button>
                  <button onClick={() => { handleDelete(project_list.id) }} >삭제</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Volunteer_modal trigger={projectModal} setTrigger={setprojectModal}>
          {/* <Project_accordion title="title" projectVolunteer={projectVolunteer}  active={active} setActive={setActive} /> */}
          {projectVolunteer.map((list)=>{
              return(
                <div className="volunteer_list">
                  <p>{list.userName}</p> 
                  <p>{list.userEmail}</p>
                  <p>{list.stack}</p>
                  <div>
                    <button onClick={() => {}}>수락</button>
                    <button onClick={() => {}}>거절</button>
                  </div>
                </div>
              )
            })}
      </Volunteer_modal>
    </div>
  );
}
