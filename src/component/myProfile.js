import React, { useState, useEffect } from "react";
import Axios from "axios";

export default function Profile() {
  const [userName, setuserName] = useState("김코딩");
  const [userEmail, setuserEmail] = useState("kimcoding@codestate.com");
  const [userStack, setuserStack] = useState([
    "NodeJS",
    "javascript",
    "java",
    "C#",
  ]);

  const [userPhoto, setuserPhoto] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/7/7e/Circle-icons-profile.svg"
  );

  return (
    <div className="myProfile-body">
      <h2>프로필</h2>
      <div className="myProfile-border">
        <div className="myProfile-left">
          <h3>이름 : {userName}</h3>
          <div>이메일 : {userEmail}</div>
          <div className="tag_lists">
            개발언어 :
            {userStack.map((stack_list) => {
              return (
                <div className="tag" key={stack_list}>
                  {stack_list}
                </div>
              );
            })}
          </div>
          <h4>포트폴리오</h4>
          <div>
            <ul>
              <li>
                <a href="">포플 링크</a>
              </li>
              <li>
                <a href="">포플 링크</a>
              </li>
            </ul>
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
