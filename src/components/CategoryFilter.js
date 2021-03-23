/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';
import '../styles/CategoryFilter.css';
import categoryList from '../utils/categoryList';

const CategoryFilter = () => {
  const { stacks, levels } = categoryList;

  const [clickedTag, setClickTag] = useState({
    stacks,
    levels,
    active: {},
    renderData: [],
  });
  const [angleDown, setAngleDown] = useState(true);
  const [tagMouseOver, setTagMouseOver] = useState('');

  const handleRenderData = clicked => {
    return Object.entries(clicked)
      .filter(el => el[1] !== false)
      .map(el => el[0]);
  };

  useEffect(() => {
    setClickTag({
      ...clickedTag,
      renderData: handleRenderData(clickedTag.active),
    });
  }, [clickedTag.active]);

  const angleDownHandler = () => {
    setAngleDown(!angleDown);
  };

  const mouserOverHandler = (boolean, level) => {
    setTagMouseOver({
      ...tagMouseOver,
      [level]: boolean,
    });
  };

  const clickHander = (e, tag, boolean) => {
    setClickTag({
      ...clickedTag,
      active: {
        ...clickedTag.active,
        [tag]: boolean,
      },
    });
  };

  return (
    <div className="category-container">
      <div className="wrapper">
        <div className="contents-left">
          <span className="text">기술 수준</span>
        </div>
        <div className="contents-right-fold">
          {levels.map(level => (
            <button
              key={level}
              className={
                clickedTag.active[level] ? 'clickedBtn' : 'unClickedBtn'
              }
              onClick={
                clickedTag.active[level]
                  ? e => clickHander(e, level, false)
                  : e => clickHander(e, level, true)
              }
              onMouseOver={
                clickedTag.active[level]
                  ? () => mouserOverHandler(true, level)
                  : null
              }
              onMouseLeave={
                clickedTag.active[level]
                  ? () => mouserOverHandler(false, level)
                  : null
              }
              onFocus={() => 0}
            >
              {level}
              {clickedTag.active[level] ? (
                <span
                  key={level}
                  className={
                    tagMouseOver[level] ? 'removeTag-mouseOver' : 'removeTag'
                  }
                >
                  x
                </span>
              ) : (
                ''
              )}
            </button>
          ))}
        </div>
      </div>
      <div className="wrapper">
        <div className="contents-left">
          <span className="text">개발 언어</span>
          <button
            className={angleDown ? 'angleDown clicked' : 'angleDown'}
            onClick={angleDownHandler}
          >
            <i className="fas fa-angle-down" aria-hidden="true" />
          </button>
        </div>
        <div
          className={
            angleDown ? 'contents-right-unfold' : 'contents-right-fold'
          }
        >
          {stacks.map(stack => (
            <button
              key={stack}
              className={
                clickedTag.active[stack] ? 'clickedBtn' : 'unClickedBtn'
              }
              onClick={
                clickedTag.active[stack]
                  ? e => clickHander(e, stack, false)
                  : e => clickHander(e, stack, true)
              }
              onMouseOver={
                clickedTag.active[stack]
                  ? () => mouserOverHandler(true, stack)
                  : null
              }
              onMouseLeave={
                clickedTag.active[stack]
                  ? () => mouserOverHandler(false, stack)
                  : null
              }
              onFocus={() => 0}
            >
              {stack}
              {clickedTag.active[stack] ? (
                <span
                  key={stack}
                  className={
                    tagMouseOver[stack] ? 'removeTag-mouseOver' : 'removeTag'
                  }
                >
                  x
                </span>
              ) : (
                ''
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
