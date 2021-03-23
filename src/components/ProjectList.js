import React from 'react'
import { Link } from 'react-router-dom';

export default function ProjectList({ project }) {
  console.log(project.projectId)
  
  return (
    <div key={project.projectId} className="project" >
      <p> 이미지 파일 
        <img className="project-img" src={project.image} /* alt={project.projectName} */></img>
      </p>
      <Link to={`/detail?${project.projectId}`}>
        <p className="project-name" > 프로젝트명 : {project.projectName}</p>
      </Link>
      
      <p className="project-attendCount"> 현재 참가 인원 수: {project.attendCount}</p>
    </div>
  )
}
