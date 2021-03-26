import React, { useEffect } from 'react';
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

  const joinusServer = 'https://server.joinus.fun/project/all';
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(joinusServer);
        dispatch(setProjectList(response.data.data));
      } catch (e) {
        console.log(e);
      }
    };
    fetchProjects();
  }, []);

  const matched = projects.filter(el => {
    if (!el.stack.length) {
      return false;
    }
    return el.stack.some(e => {
      return clickedTag.some(data => data === e);
    });
  });

  const style = { margin: '30px' };
  return projects.length === 0 ? (
    <div style={style}>
      <img
        className="loading"
        src="../loading.gif"
        alt="loading"
      />
    </div>
  ) : (
    <div className="projects">
      <h2>현재 진행중인 프로젝트</h2>
      {isLogin ? <Link to="/create">프로젝트 생성하기</Link> : ''}
      <div className="project-list">
        {!clickedTag.length
          ? projects.map((project, idx) => (
              <ProjectList project={project} key={idx} />
            ))
          : matched.map((project, idx) => (
              <ProjectList project={project} key={idx} />
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