import React, { useState ,useEffect } from "react";
import "./Project.css";
import ProjectDesc from "./ProjectDesc"
import ProjectAttend from "./ProjectAttend"
import axios from "axios";

export default function ProjectDetail() {

  const [projectInfo, setProjectInfo] = useState('');
  const [buttonPopup, setButtonPopup] = useState(false); 

  const projectId = document.location.search.split("?")[1];
  console.log("프로젝트id", document.location.search.split("?")[1])
  
  const joinusServer = 'https://server.joinus.fun/project/info'

  useEffect(() => {
    const fetchProjectInfo = async () => {
      try {
        setProjectInfo('');
        const response = await axios.post(
          joinusServer,{
            projectId : projectId
          }
        );
        setProjectInfo(response.data); 
      } catch (e) {
        console.log('에러',e)
      }
    };
    fetchProjectInfo();
  }, []);


  return (
    (!projectInfo) ? (<div>loading</div>)
    :
    (<div className="project">
      {/* 참가하기 버튼  */}
      <div className="project btn">
        <button className="btn project-attend" onClick={()=>setButtonPopup(true)}>참가 하기</button>
        <ProjectAttend trigger={buttonPopup} setTrigger={setButtonPopup} projectInfo = {projectInfo.data}>
        </ProjectAttend>
      </div>
      
      <div className = "project description">
        <h3> 프로젝트 상세 페이지 </h3>
        {console.log("프로젝트상세내용",projectInfo.data)}
        {<ProjectDesc project={projectInfo.data}/>} 
        
      </div>

      <div className="project qna">
        <h3>질의응답</h3>
          <p className="project-qna">질의 응답..</p>
      </div>
    </div>)
  );
}
