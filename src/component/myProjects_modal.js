import React from "react";
import { fakeData } from "./fakeData";

export default function myProjects_modal(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup_inner">
        <button className="close_popup" onClick={() => props.setTrigger(false)}>
          Close
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}
