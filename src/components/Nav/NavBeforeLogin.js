import React from 'react';
import { Link } from 'react-router-dom';

import Searchbox from '../Searchbox';

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
        <Link id="navBtnLeft" to="/login">
          로그인
        </Link>
        <Link id="navBtnRight" to="/signup">
          회원가입
        </Link>
      </div>
    </div>
  );
};

export default Nav;
