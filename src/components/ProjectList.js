/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const ProjectList = function ({ project }) {
  let isRender = false;

  if (project.thumbnail.length > 0) {
    isRender = true;
  }

  return (
    <div key={project.projectId} className="project">
      <Link to={`/detail/${project.projectId}`}>
        {isRender ? (
          <img
            className="project-img"
            src={`${process.env.REACT_APP_BASE_URL}/${project.thumbnail}`}
            alt="thumbnail"
          />
        ) : (
          <img className="project-img" src="../thumbnail.png" alt="thumbnail" />
        )}
        <p className="project-name">{project.projectName}</p>
      </Link>
      <p className="project-writer"> 작성자: {project.writeUser}</p>
      <p className="project-attendCount">
        {' '}
        현재 참가 인원 수: {project.attendCount}
      </p>
    </div>
  );
};

export default ProjectList;
