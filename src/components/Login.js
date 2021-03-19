/* eslint-disable consistent-return */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';
import { setLoginStatus } from '../actions/index';

axios.defaults.withCredentials = true;

const Login = () => {
  const history = useHistory();
  const [userEmail, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const dispatch = useDispatch();

  const emailHandler = e => {
    setEmail(e.target.value);
  };

  const passwordHandler = e => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    const joinusServer = 'https://server.joinus.fun/user/login';
    const testServer = 'https://localhost:4000/signin';
    if (!userEmail || !password) {
      return setErrorMsg('❗️ 이메일과 비밀번호를 입력하세요');
    }
    try {
      const response = await axios.post(joinusServer, {
        userEmail,
        password,
      });
      dispatch(setLoginStatus(true));
      history.push('/mypage');
    } catch (error) {
      console.log(error.message);
      setErrorMsg('❗️ 이메일 혹은 비밀번호가 올바르지 않습니다');
    }
  };

  const socialLoginHandler = () => {
    const GOOGLE_LOGIN_URL = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=928822058916-4cl3iej3veoov69s7jq64limd02bpdak.apps.googleusercontent.com&redirect_uri=https://joinus.fun&scope=profile`;
    window.location.assign(GOOGLE_LOGIN_URL);
  };

  return (
    <div>
      <center>
        <h2 className="loginH2">Social 로그인</h2>
        <img
          id="googleLogo"
          alt="logo"
          src="https://img.icons8.com/color/480/000000/google-logo.png"
        />
        <button
          type="button"
          onClick={socialLoginHandler}
          className="socialloginBtn"
        >
          Google 계정으로 로그인
        </button>
        <li className="loginLine" />
        <h2 className="loginH2">Email 로그인</h2>
        <form onSubmit={e => e.preventDefault()}>
          <div>
            <span>이메일</span>
            <input type="email" value={userEmail} onChange={emailHandler} />
          </div>
          <div>
            <span>패스워드</span>
            <input
              type="password"
              value={password}
              onChange={passwordHandler}
            />
          </div>
          <button className="btn btn-login" type="submit" onClick={handleLogin}>
            로그인하기
          </button>
          {errorMsg ? <div className="alert-box">{errorMsg}</div> : ''}
          <Link id="linkToSignup" to="/signup">
            아직 회원이 아니신가요? 가입하러 가기
          </Link>
        </form>
      </center>
    </div>
  );
};

export default Login;
