/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
/* eslint-disable react/jsx-pascal-case */
import React, { useState } from 'react';
import Volunteer_modal from './MyProjects_modal';

const ProjectModal = function ({ projectId }) {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="project_list">
      <button type="button" onClick={openModal}>
        신청자 목록
      </button>
      <Volunteer_modal open={modalOpen} close={closeModal} header="신청자 목록">
        {projectId}
      </Volunteer_modal>
    </div>
  );
};

export default ProjectModal;
