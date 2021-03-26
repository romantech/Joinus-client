/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import '../styles/ProjectDesc.css';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ProjectDesc from './ProjectDesc';

export default function ProjectDetail({ match }) {
  const [projectInfo, setProjectInfo] = useState('');
  const { userId, userName, accessToken } = useSelector(
    state => state.userInfoReducer.userInfo,
  );
  console.log(userName);
  const isLogin = useSelector(state => state.loginReducer.isLogin);

  const projectId = match.params.id;
  const joinusServer = 'https://server.joinus.fun/project/info';
  useEffect(() => {
    const fetchProjectInfo = async () => {
      try {
        const response = await axios.post(joinusServer, {
          projectId,
        });
        setProjectInfo(response.data);
      } catch (e) {
        console.log('에러', e);
      }
    };
    fetchProjectInfo();
  }, []);
  const attend = async () => {
    await axios({
      url: 'https://server.joinus.fun/project/attend',
      method: 'POST',
      headers: {
        authorization: accessToken,
      },
      data: {
        userId,
        projectId,
      },
    }).then(() => {
      /* alert("참가 완료") */
    });
  };
  return !projectInfo ? (
    <div>
      <img className="loading" src="../loading.gif" alt="loading" />
    </div>
  ) : (
    <div className="projectDetails">
      <Link className="linkBack" to="/">
        리스트로 돌아가기
      </Link>
      {!isLogin ? (
        <div> 로그인 후 참가 가능합니다.</div>
      ) : (
        <div className="desc-btn">
          <button
            type="button"
            className="attendbtn"
            onClick={() => {
              attend();
            }}
          >
            참가하기
          </button>
          {userName === projectInfo.data.writeUser ? (
            <Link className="linkUpdate" to={`/update/${projectId}`}>
              수정하기
            </Link>
          ) : (
            ''
          )}
        </div>
      )}
      <div className="projectDetail">
        <h3> 프로젝트 상세 페이지 </h3>
        <ProjectDesc project={projectInfo.data} />
      </div>
      <div className="projectDetail qna">
        <h3>질의응답</h3>
        <div className="project-qna">질의 응답</div>
      </div>
    </div>
  );
}
