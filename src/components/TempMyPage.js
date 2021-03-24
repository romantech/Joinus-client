// 임시 페이지
import React from 'react';
import { Link } from 'react-router-dom';

const TempMyPage = () => {
  return (
    <div>
      <h1>임시 마이페이지</h1>
      <Link to="/login">로그인 테스트</Link>
      <br />
      <Link to="/signup">회원가입 테스트</Link>
    </div>
  );
};

export default TempMyPage;
