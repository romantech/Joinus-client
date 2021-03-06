import React, { useState } from 'react';
import '../styles/ProjectCreate.css';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import CategoryFilter from './CategoryFilter';

const ProjectCreate = function () {
  const userInfo = useSelector(state => state.userInfoReducer.userInfo);
  const stacksInfo = useSelector(state => state.tagDataReducer.renderData);

  // eslint-disable-next-line no-unused-vars
  const [errorMessage, setErrorMessage] = useState('');

  return (
    <div className="projectCreate">
      <iframe title="iframe" name="frAttachFiles" className="invisable" />
      <h1> 프로젝트 생성 페이지 </h1>
      <form
        action={`${process.env.REACT_APP_BASE_URL}/upload`}
        method="post"
        className="projectCreate CRTdescribtion"
        target="frAttachFiles"
        encType="multipart/form-data"
      >
        <h3> 프로젝트에 대하여 자세히 적어주세요 </h3>
        <div>모든 항목은 필수입니다</div>
        <div className="crtProject">
          <span className="crtLeft"> 프로젝트명</span>
          <input type="text" className="project-title" name="projectName" />
        </div>
        <div className="crtProject">
          <input
            name="projectStacks"
            className="invisable"
            defaultValue={stacksInfo}
          />
          <input
            name="userId"
            className="invisable"
            defaultValue={userInfo.userId}
          />
          <CategoryFilter />
        </div>
        <div className="crtProject">
          <span className="crtLeft"> 신청 기한 </span>
          <input
            type="date"
            className="project-deadline"
            name="attendExpired"
          />
        </div>
        <div className="crtProject">
          <span className="crtLeft"> 프로젝트 설명</span>
          <input
            className="project-desc"
            placeholder="내용을 입력하세요"
            name="projectDesc"
          />
        </div>
        <div className="crtProject">
          <span className="crtLeft">이미지</span>
          <input type="file" name="imgFile" />
        </div>
        <div>
          <input type="submit" value="프로젝트 생성" className="createbtn" />
          <Link className="linkBack" to="/">
            취소
          </Link>
        </div>
      </form>
      {errorMessage ? <div className="alert-box">{errorMessage}</div> : ''}
    </div>
  );
};

export default ProjectCreate;
