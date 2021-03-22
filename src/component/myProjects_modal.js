import React from "react";

export default function myProjects_modal(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup_inner">
        <button className="close_popup" onClick={() => props.setTrigger(false)}>
          닫기
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}
