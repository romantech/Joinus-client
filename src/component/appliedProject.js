import React from "react";

export default function AppliedProject() {
  return (
    <div className="myProfile-body">
      <h2>지원한 프로젝트</h2>
      <div className="myProfile-border">
        <h3>지원현황</h3>
        <div className="applied_report">
          <p>A 기획자가 B 지원자의 요청을 거절했습니다.</p>
          <p>B 지원자가 A 기획자의 지원을 취소했습니다.</p>
        </div>
        <h3>프로젝트</h3>
        <ul></ul>
      </div>
    </div>
  );
}
