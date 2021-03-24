import React from "react";
import Axios from "axios";
import {useState, useEffect} from "react";
export default function MyAppliedProjects({userInfoDetail}) {
  const [report, setReport] = useState(false)
  const [show, setShow] = useState(false)
  // 내가 지원한 프로젝트 목록
  useEffect(() => {
    Axios({
      url: "https://server.joinus.fun/project/attend",
      method: "POST",
      data:{
        userId: 1,
        projectId: 1
      },
      headers: {
        Authentication : 12314, //redux state
        "Content-Type": "application/json" 
      }
    }).then(res => {
      console.log(res)
    })
  },[])
  // 내가 지원한 프로젝트 취소
  useEffect(()=>{
    Axios({
      url: "https://server.joinus.fun/project/cancel",
      method: "POST",
      data:{
        userId: 1,
        projectId: 1
      },
      headers: {
        Authentication : 12314, //redux state
        "Content-Type": "application/json" 
      }
    }).then(res => {
      console.log(res)
    })
  },[])
  return (
    <div className="myProfile-body">
      <div className="applied-border">
      <h2 style={{textAlign:"center"}}>지원한 프로젝트</h2>
        <h3>지원현황</h3>
        <div className="applied_report">
          {show ? <p>회원님이 지원한 프로젝트를 취소했습니다.</p> : null}
        </div>
        <h3>프로젝트</h3>
        <div>{userInfoDetail.acceptProject.map((list) => {
          return(
            <div className="volunteer_lists">
              <h3>{list.projectName}</h3>
              <button onClick = {() => setShow(true)}>지원취소</button>
            </div>
          )
        })}</div>
      </div>
    </div>
  );
}