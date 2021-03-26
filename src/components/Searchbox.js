import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setProjectList } from '../actions/index';

const Searchbox = () => {
  const history = useHistory();
  const [searchValue, setSearchValue] = useState('');
  const [resData, setresData] = useState([]);
  const [dropBox, setDropBox] = useState('projectName');
  const dispatch = useDispatch();

  const searchProject = () => {
    history.push('/');
    axios({
      url: 'https://server.joinus.fun/project/search',
      method: 'POST',
      data: {
        dropBox,
        searchValue,
      },
    })
      .then(res => {
        setresData(res.data.data);
      })
      .catch(err => console.log(err.name));
  };

  useEffect(() => {
    if (resData.length) {
      setTimeout(() => {
        dispatch(setProjectList(resData));
      }, 1000);
    }
  }, [resData]);

  return (
    <div className="search-bar">
      <select name="job" onChange={e => setDropBox(e.target.value)}>
        <option value="projectName">프로젝트</option>
        <option value="writer">작성자</option>
      </select>
      <input
        type="search"
        onChange={e => setSearchValue(e.target.value)}
        onKeyPress={e => {
          if (e.key === 'Enter') searchProject();
        }}
        placeholder="검색어 입력"
        maxLength="18"
      />
      <button type="submit" onClick={searchProject}>
        <img
          width="20"
          height="20"
          alt="searchIcon"
          src="https://img.icons8.com/metro/104/000000/search.png"
        />
      </button>
    </div>
  );
};

export default Searchbox;