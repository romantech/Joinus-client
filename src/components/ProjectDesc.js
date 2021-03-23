import React from 'react'

export default function ProjectDesc({ project }) {
  console.log(project)
  return (
    <div key={project.projectId} className="project">
      <h3> 작성자 정보 </h3>
      <p className="writer-name"> 프로젝트 작성자 : {project.writeUser}</p>
      <p className="writer-company"> 프로젝트 회사 : {project.writeUser}</p>

      <h3> 프로젝트 설명 </h3>
      <p className="project-name"> 프로젝트명 : {project.projectName}</p>
      <p className="project-stacks"> 프로젝트 사용 스택: {project.stacks}</p>
      <p className="project-attendExpired">프로젝트 신청 기한: {project.attendExpired}</p>
      <p>프로젝트 설명 
        <p className="project-Desc">{project.projectDesc}</p>
      </p>
      <p> 이미지 파일 
        <img className="project-img" src={project.image} /* alt={project.projectName} */></img>
      </p>
    </div>
  )
}
