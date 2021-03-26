import React from 'react'
import '../styles/ProjectDesc.css'
export default function ProjectDesc({ project }) {
  return (
    <div key={project.projectId} className="projectDesc">
      <div className = "writerContainer">
      <span>작성자 정보</span>
        <div className="pjwriter"> 
          <span className="pjleft">작성자 이름</span>
          <div className="pjright writerName">{project.writeUser}</div>
        </div>
        {/* <div className="pjwriter"> 
          <span className="pjleft">프로젝트 회사 </span>
          <div className="pjright writer-company"> {project.writeUser}</div>
        </div> */}
      </div>
      <div className = "pjContainer">
      <span>프로젝트 설명</span>
        <div className="pjDescription"> 
        <span className="pjleft">프로젝트명</span> 
        <div className="pjright projectName"> {project.projectName}</div></div>
        <div className="pjDescription"> 
        <span className="pjleft">사용 스택</span> 
        <div className="pjright project-stacks">
          {project.stacks.map((stack)=>{
            return ( <div className="stack" key={stack}>{stack}</div>)
          })}
        </div></div>
        <div className="pjDescription"> 
        <span className="pjleft">참가 기간</span> 
        <div className="pjright project-attendExpired">{project.attendExpired}</div></div>
        <div className="pjDescription-dsec"> 
        <span >프로젝트 설명</span> <br></br>
          <div className="project-Desc">{project.projectDesc}</div></div>
        <img className="project-img" src={project.image} /* alt={project.projectName} */ />
      </div>
    </div>
  )
}