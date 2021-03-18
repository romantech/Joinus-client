import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import Searchbox from './Searchbox';

const Nav = () => {
  return (
    <div id="nav-body">
      <span id="title">
        <Link id="titleName" to="/">
          <img id="logo" src="../logo.png" alt="logo" />
        </Link>
      </span>
      <div id="menu">
        <Searchbox />
        <Link id="login" to="/login">
          로그인
        </Link>
        <Link id="signup" to="/signup">
          회원가입
        </Link>
      </div>
    </div>
  );
};

export default withRouter(Nav);
