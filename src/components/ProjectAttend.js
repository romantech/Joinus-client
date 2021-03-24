import axios from 'axios';
import React, { useState } from 'react';
import '../styles/Project.css';
import { useHistory } from 'react-router-dom';

const accessToken = process.env.ACCESS_TOKEN;

export default function ProjectAttend(props) {
  console.log('프로젝트 참가 팝업 props: ', props.projectInfo.projectId);

  const [userInfo, setUserInfo] = useState('');

  const joinusServer = 'https://server.joinus.fun/project/attend';

  const history = useHistory();

  const handleAttend = () => {
    console.log('참가합니다');

    //! userId 수정 해야 함
    axios
      .post(
        joinusServer,
        {
          userId: 1,
          projectId: props.projectInfo.projectId,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        },
      )
      .then(() => {
        history.push('/');
      })
      .catch(err => {
        console.log(err);
      });
  };

  return props.trigger ? (
    <div className="popup project">
      <div className="popup-inner project Attend">
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          close
        </button>
        {props.children}
        <h3> 프로젝트 참가 신청서 </h3>
        <p className="project-title">
          프로젝트 명 : {props.projectInfo.projectName}
        </p>

        <p> 참가자 정보</p>
        <p className="user-name"> 신청자명 : </p>
        <p className="user-stack"> 사용 스택 : </p>
        <p className="user-portfolio"> 포트폴리오 : </p>
      </div>

      <div className="project btn">
        <button className="btn project-create" onClick={handleAttend}>
          {' '}
          프로젝트 참가하기{' '}
        </button>
      </div>
    </div>
  ) : (
    ''
  );
}
