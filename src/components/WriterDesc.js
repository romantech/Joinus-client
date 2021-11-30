/* eslint-disable react/prop-types */
import React from 'react';

const WriterDesc = function ({ writer }) {
  return (
    <div key={writer.id} className="crtWriter">
      <p className="writer-name"> 작성자 이름: {writer.userName}</p>
      <p className="writer-company"> </p>
    </div>
  );
};

export default WriterDesc;
