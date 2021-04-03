/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import '../styles/ProjectCreate.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CategoryFilter from './CategoryFilter';

export default function ProjectCreate({ match }) {
  const userInfo = useSelector(state => state.userInfoReducer.userInfo);
  const stacksInfo = useSelector(state => state.tagDataReducer.renderData);
  const [projectInfo, setProjectInfo] = useState(null);

  const projectId = match.params.id;

  useEffect(() => {
    const fetchProjectInfo = async () => {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_BASE_URL}/project/info`,
          {
            projectId,
          },
        );
        setProjectInfo(response.data.data);
      } catch (e) {
        console.log('에러', e);
      }
    };
    fetchProjectInfo();
  }, [projectId]);
  const [errorMessage, setErrorMessage] = useState('');
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

    axios
      .post(
        `${process.env.REACT_APP_BASE_URL}/project/update`,
        {
          userId: userInfo.userId,
          level: '',
          projectId,
          projectName: projectInfo.projectName,
          projectStacks: stacksInfo,
          attendExpired: projectInfo.attendExpired,
          projectDesc: projectInfo.projectDesc,
          image_urls: '',
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
  return !projectInfo ? (
    <div>
      <img
        style={{ margin: '30px' }}
        height="60"
        width="60"
        src="/loading.gif"
        alt="loading"
      />
    </div>
  ) : (
    <div className="projectCreate">
      <h1> 프로젝트 수정 페이지 </h1>
      <form className="projectCreate CRTdescribtion">
        <h3> 프로젝트에 대하여 자세히 적어주세요 </h3>
        <div>모든 항목은 필수입니다</div>
        <div className="crtProject">
          <span className="crtLeft"> 프로젝트명</span>
          <input
            type="text"
            value={projectInfo.projectName}
            className="project-title"
            onChange={handleInputValue('projectName')}
          />
        </div>
        <div className="crtProject">
          <CategoryFilter />
        </div>
        <div className="crtProject">
          <span className="crtLeft"> 신청 기한 </span>
          <input
            type="date"
            value={projectInfo.attendExpired}
            className="project-deadline"
            onChange={handleInputValue('attendExpired')}
          />
        </div>
        <div className="crtProject">
          <span className="crtLeft"> 프로젝트 설명</span>
          <textarea
            className="project-desc"
            value={projectInfo.projectDesc}
            placeholder="내용을 입력하세요"
            onChange={handleInputValue('projectDesc')}
          />
        </div>
      </form>
      <div>
        <button type="button" className="createbtn" onClick={handleCreate}>
          {' '}
          프로젝트 수정{' '}
        </button>
      </div>
      {errorMessage ? <div className="alert-box">{errorMessage}</div> : ''}
    </div>
  );
}
