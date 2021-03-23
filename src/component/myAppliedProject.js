import React from "react";

export default function MyappliedProject({project_list}) {
  return (
    <div className="myProfile-body">
      <h2>지원한 프로젝트</h2>
      <div className="applied-border">
        <h3>지원현황</h3>
        <div className="applied_report">
          <p>A 기획자가 B 지원자의 요청을 거절했습니다.</p>
          <p>B 지원자가 A 기획자의 지원을 취소했습니다.</p>
        </div>
        <h3>프로젝트</h3>
        <div>{project_list.map((list)=>{
          return(
            <div className="volunteer_lists">
              <h3>{list.projectName}</h3>
              <button>지원취소</button>
            </div>
          )
        })}</div>
      </div>
    </div>
  );
}
