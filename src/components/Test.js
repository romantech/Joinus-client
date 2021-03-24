import React, { useState } from "react";
import Volunteer_modal from "./MyProjects_modal";

export default function Test({ userInfoDetail, ProjectDelete }) {
  const [projectModal, setprojectModal] = useState(true);

  return (
    <div>
      <Volunteer_modal
        trigger={projectModal}
        setTrigger={setprojectModal}
        projectId={projectId}
      />
    </div>
  );
}
