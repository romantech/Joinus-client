import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailHandler = e => {
    setEmail(e.target.value);
  };

  const passwordHandler = e => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <center>
        <h1>로그인</h1>
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
        </form>
      </center>
    </div>
  );
};

export default withRouter(Login);
