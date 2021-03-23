import React, { useState, useEffect } from "react";
import Axios from "axios";
import { fakeUserInfo } from "./fakeUserInfo";

export default function Profile({}) {

  const [userPhoto, setuserPhoto] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/7/7e/Circle-icons-profile.svg"
  );
  const [userInfo, setuserInfo] = useState(fakeUserInfo);
  
  useEffect(() => {
    Axios({
      url:'https://server.joinus.fun/user/info', 
      method: "GET",
      data: {
        userId: 1 // redux에서 불러오는 state
      },
      headers: {
        Authentication : 12314 //redux state
      }
    })
    .then(res => {
      console.log(res.data.userName)
      setuserInfo(res.data)
    })
  }, [])


  return (
    <div className="myProfile-body">
      <div className="myProfile-border">
        <div className="myProfile-left">
          <h3>이름 : {userInfo.userName}</h3>
          <div>이메일 : {userInfo.userEmail}</div>
          <div className="tag_lists">
            개발언어 :
            {userInfo.stack.map((stack_list) => {
              return (
                <div className="tag" key={stack_list}>
                  {stack_list}
                </div>
              );
            })}
          </div>
          <h4>포트폴리오</h4>
          <div>
            {userInfo.portfolio.map((link)=>{
              return(
                <a href={link} key={link} >{link}</a>
              )
            })}
          </div>
        </div>
        <div className="myProfile-right">
          <img height="100%" src={userPhoto} width="80%"></img>
        </div>
        <div className="myProfile-line"></div>
      </div>
    </div>
  );
}
