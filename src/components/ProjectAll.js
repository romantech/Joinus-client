import React, { useEffect } from 'react';
import '../styles/ProjectListMain.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProjectList from './ProjectList';
import { setProjectList } from '../actions/index';

export default function ProjectAll() {
  const projects = useSelector(state => state.projectReducer.projects);
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
  return !projects ? (
    <div>Loading...</div>
  ) : (
    <div className="projects">
      <h2>프로젝트 리스트</h2>
      {isLogin ? <Link to="/create">프로젝트 생성하기</Link> : ''}
      <div className="project-list">
        {console.log('프로젝트리스트', projects)}
        {projects.map((project, idx) => (
          <ProjectList project={project} key={idx} />
        ))}
      </div>
    </div>
  );
}