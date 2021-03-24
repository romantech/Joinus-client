import './styles/App.css';
import React from 'react';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Main from './pages/Main';
import Login from './components/Login';
import Signup from './components/Signup';
import Nav from './components/Nav';
import Mypage from './pages/Mypage';
import TempMypage from './components/TempMyPage'; // 임시 마이페이지

export default function App() {
  // console.log('App.js 렌더');
  const isLogin = useSelector(state => state.loginReducer.isLogin);
  return (
    <div className="App">
      <Router>
        <Nav isLogin={isLogin} />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route
            exact
            path={['/login', '/mypage', '/signup']}
            render={({ pathname: path = window.location.pathname }) => {
              if (path === '/login')
                return isLogin ? <Redirect to="/mypage" /> : <Login />;
              if (path === '/signup')
                return isLogin ? <Redirect to="/mypage" /> : <Signup />;
              return isLogin ? <TempMypage /> : <Redirect to="/login" />;
            }}
          />
        </Switch>
      </Router>
    </div>
  );
}
