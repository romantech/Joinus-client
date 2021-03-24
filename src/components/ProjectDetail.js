import React, { useState ,useEffect } from "react";
import "../styles/Project.css";
import ProjectDesc from "./ProjectDesc"
import axios from "axios";
import { useSelector  } from 'react-redux';
import { Link } from 'react-router-dom';
export default function ProjectDetail({ match }) {
  const [projectInfo, setProjectInfo] = useState("");
  const { userId, accessToken } = useSelector(
    (state) => state.userInfoReducer.userInfo
  );
  const isLogin = useSelector(state => state.loginReducer.isLogin);
  const [isToggle , setIsToggle ] = useState(true)
  const projectId = match.params.id;
  const joinusServer = "https://server.joinus.fun/project/info";
  useEffect(() => {
    const fetchProjectInfo = async () => {
      try {
        const response = await axios.post(joinusServer, {
          projectId: projectId,
        });
        setProjectInfo(response.data);
      } catch (e) {
        console.log("에러", e);
      }
    };
    fetchProjectInfo();
  }, []);
  const attend = async () => {
      await axios({
        url: "https://server.joinus.fun/project/attend",
        method: "POST",
        headers: {
          authorization: accessToken,
        },
        data: {
          userId: userId,
          projectId: projectId,
        },
      }).then(() => {alert("참가 완료")});
  };
  return !projectInfo ? (
    <div>loading</div>
  ) : (
    <div className="project">
      <Link to="/">리스트로 돌아가기</Link>
      {(!isLogin) ? (
        <div> 로그인 후 참가 가능합니다.</div>
      ) : (
      <div className="project btn">
        <button
          className="btn project-attend"
          onClick={() => {
            attend();
          }}
        >
          참가하기
          {/* {isToggle ? '참가하기' :'참가완료'}  */}
        </button>
      </div>
      )}
      <div className="project description">
        <h3> 프로젝트 상세 페이지 </h3>
        <ProjectDesc project={projectInfo.data} />
      </div>
      <div className="project qna">
        <h3>질의응답</h3>
        <div className="project-qna">질의 응답..</div>
      </div>
    </div>
  );
}