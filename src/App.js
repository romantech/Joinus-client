/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Main from './components/Main';
import Login from './components/Login';
import Signup from './components/Signup';
import TempMyPage from './components/TempMyPage'; // 테스트용 마이페이지 임시
import NavBeforeLogin from './components/Nav/NavBeforeLogin';
import NavAfterLogin from './components/Nav/NavAfterLogin';

function App() {
  const isLogin = useSelector(state => state.loginReducer.isLogin);

  return (
    <div className="App">
      <Router>
        {isLogin ? <NavAfterLogin /> : <NavBeforeLogin />}
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/mypage" component={TempMyPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
