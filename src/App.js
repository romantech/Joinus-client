/* eslint-disable react/jsx-props-no-spreading */
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
import Login from './pages/Login';
import Signup from './pages/Signup';
import Nav from './pages/Nav';
import Mypage from './pages/Mypage';
import ProjectDetail from './components/ProjectDetail';
import ProjectCreate from './components/ProjectCreate';
import ProjectUpdate from './components/ProjectUpdate';

const App = function () {
  // console.log('### 현재모드: ', process.env.NODE_ENV);
  const isLogin = useSelector(state => state.loginReducer.isLogin);
  return (
    <div className="App">
      <Router>
        <Nav isLogin={isLogin} />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/detail/:id" component={ProjectDetail} />
          <Route exact path="/update/:id" component={ProjectUpdate} />
          <Route exact path="/create" component={ProjectCreate} />
          <Route
            exact
            path={['/login', '/mypage', '/signup']}
            render={routerProps => {
              if (routerProps.match.path === '/login')
                return isLogin ? (
                  <Redirect to="/mypage" />
                ) : (
                  <Login {...routerProps} />
                );
              if (routerProps.match.path === '/signup')
                return isLogin ? (
                  <Redirect to="/mypage" />
                ) : (
                  <Signup {...routerProps} />
                );
              return isLogin ? <Mypage /> : <Redirect to="/login" />;
            }}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
