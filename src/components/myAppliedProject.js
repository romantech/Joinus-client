import React from "react";

export default function MyappliedProject({project_list}) {
  return (
    <div className="myProfile-body">
      <div className="applied-border">
      <h2 style={{textAlign:"center"}}>지원한 프로젝트</h2>
        <h3>지원현황</h3>
        <div className="applied_report">
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
