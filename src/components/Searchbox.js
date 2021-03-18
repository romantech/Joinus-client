import React from 'react';
import { withRouter } from 'react-router-dom';

const Searchbox = () => {
  return (
    <input type="search" placeholder="검색어를 입력하세요" maxLength="18" />
  );
};

export default withRouter(Searchbox);
