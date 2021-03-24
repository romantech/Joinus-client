import React, {useState, useEffect} from "react";
import Axios from "axios";

import { fakeData } from '../components/fakeData';
import { fakeUserInfo } from "../components/fakeUserInfo";
import { fakeVolunteer } from "../components/fakeVolunteer";

import MyProfile from '../components/myProfile'
import MyProject from '../components/myProjects'
import MyappliedProject from '../components/myAppliedProject'

export default function Mypage(){

  const [project_list, setproject_list] = useState(fakeData.data); 
  const [userInfo, setUserInfo] = useState(fakeUserInfo);
  const [projectVolunteer, setProjectVolunteer] = useState(fakeVolunteer);
  /* 가짜 정보(테스트용)  */

  useEffect(() => {
    fetch('https://server.joinus.fun/project/all')
    .then(res => {
      return res.json();
    })
    .then(project_list => {
      setproject_list(project_list.data)
    })
  }, [])

  const ProjectDelete = (userId, projectId) => {
    if(window.confirm('삭제하시겠습니다')){
      Axios({
        url: 'https://server.joinus.fun/project/delete',
        method: "POST",
        data:{
          userId: userId,
          projectId: projectId
        },
        headers: {
          Authentication : 1234 //redux state
        }
      })
    }
  }

  return (
    <div>
      <MyProfile userInfo ={userInfo} />
      <MyProject project_list = {project_list} projectVolunteer ={projectVolunteer} handleDelete={ProjectDelete} />
      <MyappliedProject project_list={project_list} />
    </div>
  )
}

