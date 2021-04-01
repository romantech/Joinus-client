import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';
import { setLoginStatus, setUserInfo } from '../actions/index';
import Searchbox from '../components/Searchbox';
import '../styles/Nav.css';
import Modal from '../components/Modal';

axios.defaults.withCredentials = true;

const joinusServer = 'https://server-j.colorfilter.cloud';
const testServer = 'https://localhost:4000';

export default function Nav({ isLogin }) {
  const userInfo = useSelector(state => state.userInfoReducer);
  const { accessToken, source } = userInfo;

  const history = useHistory();
  const dispatch = useDispatch();

  const [modalOpen, setModalOpen] = useState(false);
  const closeModal = () => {
    setModalOpen(false);
    history.push('/');
  };

  const handleLogout = () => {
    axios
      .post(
        `${joinusServer}/user/logout`,
        {
          data: source,
        },
        {
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
        },
      )
      .then(res => {
        console.log('Nav-Logout', res.status);
        dispatch(setLoginStatus(false));
        dispatch(setUserInfo(''));
        setModalOpen(true);
      })
      .catch(error => console.log(error.message));
  };

  const clickHandler = () => {
    window.location.replace('/');
  };

  return (
    <div>
      <div id="nav-body">
        <span id="title">
          <Link id="titleName" to="/" onClick={clickHandler}>
            <img id="logo" src="/logo.png" alt="logo" />
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
