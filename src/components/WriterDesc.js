import React from 'react'

export default function WriterDesc({ writer }) {
   
  return (
    <div key={writer.id} className="writer">
      <p className="writer-name"> 작성자 이름: {writer.name}</p>
      <p className="writer-company"> 회사정보 : </p>
      <p> 이미지 파일 
        <img className="writer-img" src={writer.image} /* alt={project.projectName} */></img>
      </p>
    </div>
  )
}