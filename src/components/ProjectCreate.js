import React,{useState} from "react";
import "./Project.css";
import axios from "axios";
import {initialState} from "../reducers/initialState"
import WriterDesc from "./WriterDesc";
import { useHistory } from "react-router-dom";

const accessToken = process.env.ACCESS_TOKEN;

export default function ProjectCreate() {

  const [users, ] = useState(initialState.users);

  const [ errorMessage, setErrorMessage ] = useState("")
  const [ projectInfo, setProjectInfo ] = useState({
    projectName:"",
    projectStacks:"",
    attendExpired: "",
    projectDesc:"",
    image_urls:""
    }
  )

  const handleInputValue = (key) => (e) => {
    console.log(e.target.value)  
    setProjectInfo(Object.assign({},projectInfo, {[key]: e.target.value }));
  };

  // const readInputFile = (key) => (e) => {
  //   console.log(e.target.files)  
  //   setProjectInfo(Object.assign({},projectInfo, {[key]: e.target.files }));
  // };

  const history = useHistory();

  const handleCreate = () =>{

    if(!projectInfo.projectName || !projectInfo.attendExpired || !projectInfo.projectDesc) {
      console.log(1)
      setErrorMessage("프로젝트 설명 모두 입력하세요")
      return;
    }
    else {
      setErrorMessage("")
    }

    const joinusServer = 'https://server.joinus.fun/project/create'
    //! userId 수정 해야 함
    axios
      .post(joinusServer, {
        userId: 1,
        level: "",
        projectName: projectInfo.projectName,
        projectStacks: projectInfo.projectStacks,
        attendExpired: projectInfo.attendExpired,
        projectDesc: projectInfo.projectDesc,
        image_urls: projectInfo.image_urls
      },
      { headers:{
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json" 
      }}
      )
      .then(() =>{
        history.push("/");
      })
      .catch((err) => { 
        console.log(err);
      });

    // console.log("프로젝트명:" ,projectInfo.projectName)
    // console.log("사용스택:" ,projectInfo.projectStacks)
    // console.log("참가 기한:" ,projectInfo.attendExpired)
    // console.log("프로젝트 설명:" ,projectInfo.projectDesc)
    // console.log("생성")
  }


  return (
    <div className="project">
      <h1> 프로젝트 생성 페이지 </h1>
      <form className="project describtion">
        <h3> 프로젝트 설명 </h3>
        <div>모든 항목은 필수입니다</div>
        <div>
          <span> 프로젝트명</span>
          <input type="text" className ="project-title" 
          onChange={handleInputValue("projectName")}></input> 
        </div>
        <div>
          <span> 사용 스택</span>
          <input type="text" className="project-tag"
          onChange={handleInputValue("projectStacks")}></input>
        </div>
        <div>
          <span> 신청 기한 </span>
          <input type="text" className="project-deadline"
          onChange={handleInputValue("attendExpired")}></input>
        </div>
        <div>
          <span> 프로젝트 설명</span>
          <textarea className="project-desc" placeholder='내용을 입력하세요'
          onChange={handleInputValue("projectDesc")}></textarea>
        </div>
        <div>
          <span>이미지</span>
          <img className="image"/> 
          이미지 파일

        </div>
      </form>

      <div className = "project writer">
        <h3>작성자 정보 </h3>
          {users.map((writer,id) => <WriterDesc writer={writer} key={id}/>)}
      </div>

      <div className="project btn">
        <button className="btn project-create" onClick={handleCreate}> 프로젝트 생성 </button>
      </div>
      {errorMessage 
      ?
        <div className="alert-box">
          {errorMessage}
        </div> 
      : ''}

    </div>
  );
}