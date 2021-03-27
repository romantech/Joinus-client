import React, { useEffect, useState } from 'react';
import '../styles/ProjectListMain.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProjectList from './ProjectList';
import { setProjectList } from '../actions/index';

export default function ProjectAll() {
  const projects = useSelector(state => state.projectReducer.projects);
  const clickedTag = useSelector(state => state.tagDataReducer.renderData);
  const isLogin = useSelector(state => state.loginReducer.isLogin);
  const dispatch = useDispatch();

  // console.log(clickedTag);
  const [fetchStatus, setFetchStatus] = useState(true);
  const joinusServer = 'https://server.joinus.fun/project/all';

  useEffect(() => {
    console.log('이팩트1', projects.length);
    if (!projects.length) {
      const fetchProjects = async () => {
        try {
          const response = await axios.get(joinusServer);
          dispatch(setProjectList(response.data.data));
        } catch (e) {
          console.log(e);
        }
      };
      fetchProjects();
    }
    return () => {
      console.log('클린업1', projects.length);
      if (projects.length) {
        setFetchStatus(false);
      }
    };
  }, [projects]);

  const matched = projects.filter(el => {
    if (!el.stack.length) {
      return false;
    }
    return el.stack.some(e => {
      return clickedTag.some(data => data === e);
    });
  });

  // console.log(projects);

  console.log('렌더');
  return fetchStatus ? (
    <img
      height="100"
      width="100"
      src={`${process.env.PUBLIC_URL}/loading.gif`}
      alt="loading"
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
}
