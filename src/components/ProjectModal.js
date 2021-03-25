import React, { useState } from "react";
import Volunteer_modal from "./MyProjects_modal";

export default function ProjectModal({ projectId }) {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="project_list">
      <button onClick={openModal}>신청자 목록</button>
      <Volunteer_modal
        open={modalOpen}
        close={closeModal}
        header="신청자 목록"
      >
        {projectId}
      </Volunteer_modal>
    </div>
  );
}
