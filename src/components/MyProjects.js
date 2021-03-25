import { Link } from "react-router-dom";
import ProjectModal from "./ProjectModal";

export default function Myprojects({ userInfoDetail, ProjectDelete }) {
  
  return (
    <div className="myProfile-body">
      <div className="myProfile-border">
        <h2>생성한 프로젝트</h2>
          {userInfoDetail.myProject.map((list) => {
            return (
              <div key={list.projectId} className="myProject_list">
                <div>
                  <h3>{list.projectName}</h3>
                  <ProjectModal key={list.projectId} projectId={list.projectId} />
                  <Link className="modify" to={`/update/${list.projectId}`}>수정</Link>
                  <button
                    onClick={() => {
                      ProjectDelete(list.projectId);
                    }}
                  >
                    삭제
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}