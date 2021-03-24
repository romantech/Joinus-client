import React from 'react';

export default function WriterDesc({ writer }) {
  // 작성자 정보가져오기
  return (
    <div key={writer.id} className="writer">
      <p className="writer-name"> 작성자 이름: {writer.name}</p>
      <p className="writer-company"> 회사정보 : </p>
      <p>
        {' '}
        이미지 파일
        <img
          alt="이미지"
          className="writer-img"
          src={writer.image} /* alt={project.projectName} */
        />
      </p>
    </div>
  );
}
