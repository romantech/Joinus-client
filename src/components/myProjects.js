import axios from "axios";
import React, {useState, useEffect} from "react";
import Volunteer_modal from "./myProjects_modal";


export default function Myprojects({project_list, projectVolunteer, handleDelete}) {
  const [projectModal, setprojectModal] = useState(false);  //모달 state
  
  useEffect(()=>{
    axios({
      url:"https://server.joinus.fun/project/attend",
      method: "POST",
      data:{
        userId: 1,
        projectId: 1
      },
      headers: {
        Authentication : 12314, //redux state
      }
    }).then(res=>{
      console.log(res)
    })
  },[])

  return (
    <div className="myProfile-body">
      <div className="myProfile-border">
      <h2>생성한 프로젝트</h2>
        <div className="project_list">
          {project_list.map((list) => {
            return (
              <div key={list.id} className="myProject_list">
                <span>{list.attendExpired}</span>
                <h3>{list.projectName}</h3>
                <span>{list.attendCount}</span>
                <div className="myProject_right">
                  <button
                    onClick={() => {
                      setprojectModal(true);
                    }}
                  >
                    신청자 목록
                  </button>
                  <button>수정</button>
                  <button onClick={() => { handleDelete(project_list.projectId) }} >삭제</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Volunteer_modal trigger={projectModal} setTrigger={setprojectModal}>
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
