import React, { useState ,useEffect} from "react";
import "./Project.css";
import axios from "axios";
import ProjectList from './ProjectList'
import { Link } from 'react-router-dom';

export default function ProjectAll() {
  
  const [projectAll, setProjectAll] = useState('');

  const joinusServer = 'https://server.joinus.fun/project/all'

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setProjectAll('');
        const response = await axios.get(
          joinusServer
        );
        setProjectAll(response.data); 
      } catch (e) {
        console.log(e)
      }
    };
    fetchProjects();
  }, []);

  return (
    (!projectAll) ?(<div>loading</div>)
    :
    (<div className="project">
      <div className='project list'>
        <h1>프로젝트 리스트</h1>
          {console.log("프로젝트리스트",projectAll.data)}
          {projectAll.data.map((project, idx)=> <ProjectList project={project} key={idx}/>)} 
  
      </div>
      <Link to="/create">프로젝트 생성하기</Link>
    </div>)

  )
}
