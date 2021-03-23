import './styles/App.css';
import React from 'react';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Main from './components/Main';
import Login from './components/Login';
import Signup from './components/Signup';
import Nav from './components/Nav';
import TempMypage from './components/TempMyPage'; // 임시 마이페이지

export default function App() {
  const isLogin = useSelector(state => state.loginReducer.isLogin);

  return (
    <div className="App">
      <Router>
        <Nav isLogin={isLogin} />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          {/* <Route
            exact
            path="/login"
            render={() => (isLogin ? <TempMypage /> : <Login />)}
          /> */}
          <Route
            exact
            path="/mypage"
            render={() => (isLogin ? <TempMypage /> : <Redirect to="/login" />)}
          />
        </Switch>
      </Router>
    </div>
  );
}
