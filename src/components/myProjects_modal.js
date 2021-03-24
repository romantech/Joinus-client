/* eslint-disable camelcase */
import React from 'react';

export default function MyProjects_modal(props) {
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
    ''
  );
}
