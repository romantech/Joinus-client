import React from 'react';
import { withRouter } from 'react-router-dom';

const Main = () => {
  return (
    <div>
      <h1>홈 화면입니다</h1>
      <p>이 곳은 홈입니다. 가장 먼저 보이는 페이지입니다.</p>
    </div>
  );
};

export default withRouter(Main);
