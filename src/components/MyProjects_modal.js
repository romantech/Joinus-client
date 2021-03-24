import React from "react";
export default function MyProjects_modal(props) {
  console.log(props.projectId)
  
  return props.trigger ? (
    <div className="popup">
      <div className="popup_inner">
        <button className="close_popup" onClick={() => props.setTrigger(false)}>
          닫기
        </button>
      </div>
    </div>
  ) : (
    ""
  );
}