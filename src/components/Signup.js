import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [portfolio, setPortfolio] = useState('');
  const [stack, setStack] = useState('');

  const emailHandler = e => {
    setEmail(e.target.value);
  };

  const passwordHandler = e => {
    setPassword(e.target.value);
  };
  const nameHandler = e => {
    setName(e.target.value);
  };
  const descHandler = e => {
    setDesc(e.target.value);
  };
  const portfolioHandler = e => {
    setPortfolio(e.target.value);
  };
  const stackHandler = e => {
    setStack(e.target.value);
  };

  return (
    <div>
      <center>
        <h1>회원가입</h1>
        <h2>필수항목</h2>
        <form onSubmit={e => e.preventDefault()}>
          <div>
            <span>이메일</span>
            <input type="email" value={email} onChange={emailHandler} />
          </div>
          <div>
            <span>패스워드</span>
            <input
              type="password"
              value={password}
              onChange={passwordHandler}
            />
          </div>
          <div>
            <span>이름</span>
            <input type="text" value={name} onChange={nameHandler} />
          </div>
          <h2>선택항목</h2>
          <div>
            <span>자기소개</span>
            <input type="text" value={desc} onChange={descHandler} />
          </div>
          <div>
            <span>포트폴리오</span>
            <input type="text" value={portfolio} onChange={portfolioHandler} />
          </div>
          <div>
            <span>사용 가능 스택</span>
            <input type="text" value={stack} onChange={stackHandler} />
          </div>
        </form>
      </center>
    </div>
  );
};

export default withRouter(Signup);
