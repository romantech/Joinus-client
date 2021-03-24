import {useState} from "react";

export default function MyProfile({ userInfoDetail }) {
  const [userPhoto, setuserPhoto] = useState("https://upload.wikimedia.org/wikipedia/commons/7/7e/Circle-icons-profile.svg");
  return (
    <div className="myProfile-body">
      <div className="myProfile-border">
        <div className="myProfile-left">
          <h3>이름 : {userInfoDetail.userName}</h3>
          <div>이메일 : {userInfoDetail.userEmail}</div>
          <div className="tag_lists">
            개발언어 :
            {userInfoDetail.stack.map((stack_list) => {
              return (
                <div className="tag" key={stack_list}>
                  {stack_list}
                </div>
              );
            })}
          </div>
          <h4>포트폴리오</h4>
          <div>
            {userInfoDetail.portfolio.map((link) => {
              return (
                <div key={link}>
                <a href={link} >
                  {link}
                </a>
                </div>
              );
            })}
          </div>
        </div>
        <div className="myProfile-right">
          <img height="100%" src={userPhoto} width="100%"></img>
        </div>
      </div>
    </div>
  );
}