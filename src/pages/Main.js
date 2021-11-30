import React from 'react';
import CategoryFilter from '../components/CategoryFilter';
import ProjectAll from '../components/ProjectAll';

const Main = function () {
  return (
    <div>
      <h2>모두를 위한 프로젝트 플랫폼 JOINUS</h2>
      <p>해당하는 항목을 선택해보세요</p>
      <CategoryFilter />
      <ProjectAll />
    </div>
  );
};

export default Main;
