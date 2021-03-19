import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setLoginStatus, setUserInfo } from '../../actions/index';
import Searchbox from '../Searchbox';

const Nav = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleLogout = () => {
    const joinusServer = 'https://server.joinus.fun/user/logout';
    const testServer = 'https://localhost:4000/signout';

    axios.post(testServer, null, { withCredentials: true }).then(result => {
      // console.log(result);
      dispatch(setLoginStatus(false));
      dispatch(setUserInfo('', '', '', '', '', ''));
      history.push('/');
    });
  };

  return (
    <div id="nav-body">
      <span id="title">
        <Link id="titleName" to="/">
          <img id="logo" src="../logo.png" alt="logo" />
        </Link>
      </span>
      <div id="menu">
        <Searchbox />
        <Link id="navBtnLeft" to="/mypage">
          마이페이지
        </Link>
        <button id="navBtnRight" type="submit" onClick={handleLogout}>
          로그아웃
        </button>
      </div>
    </div>
  );
};

export default Nav;
