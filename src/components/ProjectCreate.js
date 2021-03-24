/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import '../styles/Project.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import WriterDesc from './WriterDesc';
import CategoryFilter from './CategoryFilter';

export default function ProjectCreate() {
  const userInfo = useSelector(state => state.userInfoReducer.userInfo);
  const dispatch = useDispatch();
  console.log('create:', userInfo);
  const [errorMessage, setErrorMessage] = useState('');
  const [projectInfo, setProjectInfo] = useState({
    projectName: '',
    projectStacks: '',
    attendExpired: '',
    projectDesc: '',
    image_urls: '',
  });
  const handleInputValue = key => e => {
    console.log(e.target.value);
    setProjectInfo({ ...projectInfo, [key]: e.target.value });
  };
  const history = useHistory();
  const handleCreate = () => {
    if (
      !projectInfo.projectName ||
      !projectInfo.attendExpired ||
      !projectInfo.projectDesc
    ) {
      setErrorMessage('프로젝트의 설명을 모두 입력하세요');
      return;
    }

    setErrorMessage('');

    const joinusServer = 'https://server.joinus.fun/project/create';
    axios
      .post(
        joinusServer,
        {
          userId: userInfo.userId,
          level: '',
          projectName: projectInfo.projectName,
          projectStacks: projectInfo.projectStacks,
          attendExpired: projectInfo.attendExpired,
          projectDesc: projectInfo.projectDesc,
          image_urls: projectInfo.image_urls,
        },
        {
          headers: {
            Authorization: `Bearer ${userInfo.accessToken}`,
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
  return (
    <div className="project">
      <h1> 프로젝트 생성 페이지 </h1>
      <form className="project describtion">
        <h3> 프로젝트에 대하여 자세히 적어주세요 </h3>
        <div>모든 항목은 필수입니다</div>
        <div>
          <span> 프로젝트명</span>
          <input
            type="text"
            className="project-title"
            onChange={handleInputValue('projectName')}
          />
        </div>
        <div>
          <span> 사용 스택</span>
          <input
            type="text"
            className="project-tag"
            onChange={handleInputValue('projectStacks')}
          />
          {/* <CategoryFilter /> */}
        </div>
        <div>
          <span> 신청 기한 </span>
          <input
            type="text"
            className="project-deadline"
            onChange={handleInputValue('attendExpired')}
          />
        </div>
        <div>
          <span> 프로젝트 설명</span>
          <textarea
            className="project-desc"
            placeholder="내용을 입력하세요"
            onChange={handleInputValue('projectDesc')}
          />
        </div>
        <div>
          <span>이미지</span>
          <img className="image" />
          이미지 파일
        </div>
      </form>
      <div className="project writer">
        <h3>작성자 정보 </h3>
        <WriterDesc writer={userInfo} />
      </div>
      <div className="project btn">
        <button className="btn project-create" onClick={handleCreate}>
          {' '}
          프로젝트 생성{' '}
        </button>
      </div>
      {errorMessage ? <div className="alert-box">{errorMessage}</div> : ''}
    </div>
  );
}
