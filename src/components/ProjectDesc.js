/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import '../styles/ProjectDesc.css';

export default function ProjectDesc({ project }) {
  return (
    <div key={project.projectId} className="project">
      <div className="writerContainer">
        <h4> 작성자 정보 </h4>
        <div className="left-text"> 프로젝트 작성자 </div>
        <div className="right writer-name"> {project.writeUser}</div>
        <div className="left-text"> 프로젝트 회사 </div>
        <div className="right writer-company"> {project.writeUser}</div>
      </div>
      <div className="projectContainer">
        <h3> 프로젝트 설명 </h3>
        <div className="left-text"> 프로젝트명 </div>
        <div className="right project-name"> {project.projectName}</div>
        <div className="left-text"> 사용 스택 </div>
        <div className="right project-stacks">{project.stacks}</div>
        <div className="left-text"> 신청기한 </div>
        <div className="right project-attendExpired">
          {project.attendExpired}
        </div>
        <div className="left-text"> 프로젝트 설명 </div>
        <div className="right project-Desc">{project.projectDesc}</div>
        <img
          className="project-img"
          src={project.image} /* alt={project.projectName} */
        />
      </div>
    </div>
  );
}
