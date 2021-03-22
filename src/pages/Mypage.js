import React, {useState, useEffect} from "react";
//import Axios from "axios";

import { fakeData } from '../component/fakeData';
import { fakeUserInfo } from "../component/fakeUserInfo";
import { fakeVolunteer } from "../component/fakeVolunteer";

import MyProfile from '../component/myProfile'
import MyProject from '../component/myProjects'
import MyappliedProject from '../component/myAppliedProject'

export default function Mypage(){

  const [project_list, setproject_list] = useState(fakeData.data);
  const [userInfo, setUserInfo] = useState(fakeUserInfo);
  const [projectVolunteer, setProjectVolunteer] = useState(fakeVolunteer);
  /* 가짜 정보(테스트용)  */

  const handleDelete = (projectId) => {
    for (let i = 0; i < project_list.length; i++) {
      if (project_list[i].projectId === projectId) {
        setproject_list([...project_list.slice(0, i), ...project_list.slice(i + 1)]);
        break;
      }
    }
  }
  
  return (
    <div>
      <MyProfile userInfo ={userInfo} />
      <MyProject project_list = {project_list} userInfo ={userInfo} projectVolunteer ={projectVolunteer} handleDelete={handleDelete} />
      <MyappliedProject project_list={project_list} />
    </div>
  )
}

