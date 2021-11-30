import React, { useEffect, useState } from 'react';
import '../styles/ProjectListMain.css';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProjectList from './ProjectList';
import { setProjectList, fetchData } from '../actions/index';

const ProjectAll = function () {
  const projects = useSelector(state => state.projectReducer.projects);
  const clickedTag = useSelector(state => state.tagDataReducer.renderData);
  const isLogin = useSelector(state => state.loginReducer.isLogin);
  const dispatch = useDispatch();

  // console.log(clickedTag);
  const [fetchStatus, setFetchStatus] = useState(true);

  useEffect(() => {
    // console.log('이펙트1');
    if (!projects.length) {
      dispatch(
        fetchData(
          `${process.env.REACT_APP_BASE_URL}/project/all`,
          setProjectList,
        ),
      );
    }
  }, [dispatch, projects.length]);

  useEffect(() => {
    // console.log('이펙트2');
    if (projects.length) {
      setFetchStatus(false);
    }
  }, [projects]);

  const matched = projects.filter(el => {
    if (!el.stack.length) {
      return false;
    }
    return el.stack.some(e => {
      return clickedTag.some(data => data === e);
    });
  });

  // console.log('렌더', fetchStatus);
  return fetchStatus || !projects.length ? (
    <img
      height="60"
      width="60"
      src={`${process.env.PUBLIC_URL}/loading.gif`}
      alt="loading"
      style={{ margin: '30px' }}
    />
  ) : (
    <div className="projects">
      <h2>현재 진행중인 프로젝트</h2>
      {isLogin ? <Link to="/create">프로젝트 생성하기</Link> : ''}
      <div className="project-list">
        {/* {console.log('프로젝트리스트', projects)} */}
        {!clickedTag.length
          ? projects.map(project => (
              <ProjectList project={project} key={project.projectId} />
            ))
          : matched.map(project => (
              <ProjectList project={project} key={project.projectId} />
            ))}
        {!matched.length && clickedTag.length ? (
          <h3 className="projectAll-H3">
            아직 해당 언어를 사용하는 프로젝트가 없어요 😢
          </h3>
        ) : null}
      </div>
    </div>
  );
};

/* eslint-disable */
  // * useEffect 과정
  // 렌더
    // 이펙트 실행(첫 마운트)
  // 렌더
    // 클린업(다음 이펙트 실행전 렌더)
    // 이펙트 실행 -> store 상태 변경
  // 렌더(구독하는 store 상태 변경돼서 다시 렌더)
    // 클린업 -> fetchStatus 상태 변경(useState)
    // 이펙트
  // 렌더(클린업 함수가 컴포넌트 상태를 업데이트 했으므로)
  /* eslint-enable */

// useEffect(() => {
//   // console.log('이팩트', projects.length, fetchStatus);
//   if (projects.length) {
//     setFetchStatus(false);
//   } else {
//     const fetchProjects = async () => {
//       try {
//         const response = await axios.get(joinusServer);
//         dispatch(setProjectList(response.data.data));
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     fetchProjects();
//   }
//   // return () => {
//   //   console.log('클린업1-1', projects.length, fetchStatus);
//   //   if (projects.length) {
//   //     // console.log('클린업1-2', projects.length, fetchStatus);
//   //     setFetchStatus(false);
//   //   }
//   // };
// }, [projects]);

export default ProjectAll;
