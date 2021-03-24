import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { setLoginStatus, setUserInfo } from '../actions/index';
import Searchbox from './Searchbox';
import '../styles/Nav.css';
import Modal from './Modal';

export default function Nav({ isLogin }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const [modalOpen, setModalOpen] = useState(false);
  const closeModal = () => {
    setModalOpen(false);
    history.push('/');
  };

  const handleLogout = () => {
    const joinusServer = 'https://server.joinus.fun/user/logout';
    const testServer = 'https://localhost:4000/signout';

    axios
      .post(testServer, null, { withCredentials: true })
      .then(res => {
        // console.log('Nav-Logout', res.status);
        dispatch(setLoginStatus(false));
        dispatch(setUserInfo(''));
        setModalOpen(true);
      })
      .catch(error => console.log(error.message));
  };

  return (
    <div>
      <div id="nav-body">
        <span id="title">
          <Link id="titleName" to="/">
            <img id="logo" src="../logo.png" alt="logo" />
          </Link>
        </span>
        <div id="menu">
          <Searchbox />
          {isLogin ? (
            <Link id="navBtnLeft" to="/mypage">
              마이페이지
            </Link>
          ) : (
            <Link id="navBtnLeft" to="/login">
              로그인
            </Link>
          )}
          {isLogin ? (
            <button id="navBtnRight" type="submit" onClick={handleLogout}>
              로그아웃
            </button>
          ) : (
            <Link id="navBtnRight" to="/signup">
              회원가입
            </Link>
          )}
        </div>
      </div>
      <div>
        {modalOpen ? (
          <Modal
            open={modalOpen}
            close={closeModal}
            message="로그아웃에 성공했습니다"
          />
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

Nav.propTypes = {
  isLogin: PropTypes.bool.isRequired,
};
