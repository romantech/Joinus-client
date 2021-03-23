import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';
import { setLoginStatus, setToken } from '../actions/index';
import {
  validateEmail,
  validatePassword,
  matchPassword,
  checkAllItems,
  validateKoreanName,
} from '../utils/validate';
import '../styles/LoginSignup.css';
import Modal from './Modal';

axios.defaults.withCredentials = true;

const Signup = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [singUpInfo, setSignUpInfo] = useState({
    userEmail: '',
    password: '',
    password2: '',
    userName: '',
    company: '',
    portfolios: '',
    stacks: '',
    isLogin: false,
    errorMsg: '',
  });

  const {
    userEmail,
    password,
    password2,
    userName,
    company,
    portfolios,
    stacks,
    isLogin,
    errorMsg,
  } = singUpInfo;

  useEffect(() => {
    if (isLogin) {
      axios
        .post('https://server.joinus.fun/user/login', {
          userEmail,
          password,
        })
        .then(res => {
          dispatch(setToken(res.data.data.accessToken));
        })
        .catch(error => console.log(error.message));
    }
  }, [isLogin]);

  const [modalOpen, setModalOpen] = useState(false);
  const closeModal = () => {
    setModalOpen(false);
    history.push('/mypage');
  };

  const inputHandler = key => e => {
    // if (key === 'password' || key === 'password2') {
    //   let { value } = e.target;
    //   value = value.replace(/[^A-Za-z0-9]/gi, ''); // 숫자, 영어만 가능
    //   return setSignUpInfo({
    //     ...singUpInfo,
    //     [key]: value,
    //   });
    // }

    if (key === 'userName') {
      let { value } = e.target;
      value = value.replace(/ /gi, ''); // 공백제거
      return setSignUpInfo({
        ...singUpInfo,
        [key]: value,
      });
    }
    return setSignUpInfo({
      ...singUpInfo,
      [key]: e.target.value,
    });
  };

  const handleSignup = async () => {
    const joinusServer = 'https://server.joinus.fun/user/signup';
    if (!userEmail || !password || !userName) {
      return setSignUpInfo({
        ...singUpInfo,
        errorMsg: '❗️ 필수항목을 모두 입력해주세요',
      });
    }
    if (!checkAllItems(userEmail, password, password2, userName)) {
      return setSignUpInfo({
        ...singUpInfo,
        errorMsg: '❗️ 필수항목을 정확히 입력해주세요',
      });
    }
    try {
      const res = await axios.post(joinusServer, {
        userEmail,
        password,
        userName,
        company,
        portfolios,
        stacks,
      });
      // console.log(res);
      dispatch(setLoginStatus(true));
      setSignUpInfo({
        ...singUpInfo,
        isLogin: true,
      });
      setModalOpen(true);
    } catch (error) {
      // console.dir(error);
      return !error.response
        ? setSignUpInfo({
            ...singUpInfo,
            errorMsg: '❗️ 서버 오류, 잠시 후 다시 시도해주세요',
          })
        : setSignUpInfo({
            ...singUpInfo,
            errorMsg: '❗️ 이미 가입된 이메일입니다',
          });
    }
  };

  const inValid = <i className="far fa-check-circle" aria-hidden="true" />;
  const valid = <i className="fas fa-check-circle valid" aria-hidden="true" />;
  const optional = <i className="far fa-edit" aria-hidden="true" />;
  const inlineBlockStyle = { display: 'inline-block' };

  return (
    <div className="signUpContainer">
      <form onSubmit={e => e.preventDefault()}>
        <div className="signUpBox">
          <h2>필수항목</h2>
          <div className="signUpBoxIn">
            <div className="inputLeftText">이메일</div>
            <div>
              <input
                type="email"
                value={userEmail}
                placeholder="수신 가능한 이메일 주소 입력"
                maxLength="30"
                onChange={inputHandler('userEmail')}
              />
              {validateEmail(userEmail) ? valid : inValid}
            </div>
          </div>
          <div className="signUpBoxIn">
            <div className="inputLeftText">패스워드</div>
            <div>
              <input
                type="password"
                value={password}
                placeholder="숫자와 영문을 포함해 최소 8자리"
                maxLength="16"
                onChange={inputHandler('password')}
              />
              {validatePassword(password) ? valid : inValid}
            </div>
          </div>
          <div className="signUpBoxIn">
            <div className="inputLeftText">패스워드 확인</div>
            <div>
              <input
                type="password"
                value={password2}
                maxLength="16"
                placeholder="위와 동일한 비밀번호 입력"
                onChange={inputHandler('password2')}
              />
              {matchPassword(password, password2) ? valid : inValid}
            </div>
          </div>
          <div className="signUpBoxIn">
            <div className="inputLeftText">한글 이름</div>
            <div>
              <input
                type="text"
                value={userName}
                maxLength="10"
                placeholder="한글만 입력 가능합니다"
                onChange={inputHandler('userName')}
              />
              {validateKoreanName(userName) ? valid : inValid}
            </div>
          </div>
          <div className="signUpBoxOptional">
            <h2>선택항목</h2>
            <div className="signUpBoxIn">
              <div className="inputLeftText">재직회사</div>
              <div>
                <input
                  type="text"
                  maxLength="15"
                  value={company}
                  onChange={inputHandler('company')}
                />
                {optional}
              </div>
            </div>
            <div className="signUpBoxIn">
              <div className="inputLeftText">포트폴리오</div>
              <div>
                <input
                  type="text"
                  maxLength="50"
                  value={portfolios}
                  onChange={inputHandler('portfolios')}
                />
                {optional}
              </div>
            </div>
            <div className="signUpBoxIn">
              <div className="inputLeftText">주요스택</div>
              <div>
                <input
                  type="text"
                  maxLength="50"
                  value={stacks}
                  onChange={inputHandler('stacks')}
                />
                {optional}
              </div>
            </div>
            <div className="signUpBoxIn">
              <div className="inputLeftText" />
              <button
                className="btn-signup"
                type="submit"
                onClick={handleSignup}
              >
                가입하기
              </button>
            </div>
            <div className="signUpBoxIn">
              {errorMsg ? <div className="alert-box">{errorMsg}</div> : ''}
            </div>
            <div className="signUpBoxIn">
              <div className="additionalNotice">
                <div style={inlineBlockStyle}>이미 회원이신가요? </div>
                <Link className="additionalNotice link" to="/login">
                  로그인하러 가기
                </Link>
              </div>
            </div>
          </div>
        </div>
      </form>
      {modalOpen ? (
        <Modal
          open={modalOpen}
          close={closeModal}
          message="회원가입에 성공했습니다"
        />
      ) : (
        ''
      )}
    </div>
  );
};

export default Signup;
