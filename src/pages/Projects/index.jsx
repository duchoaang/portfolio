import React, { useState } from "react";
import "./Card.css";
import styled from "styled-components";

const ProjectInfo = [
  {
    img: "/src/assets/project_1.jpg",
    name: "Hệ thống pháp luật CodeHeroes",
    des: "Hệ thống cho phép người dùng tra cứu pháp điển, trả lời các câu hỏi thông minh ",
    tech: [
      {
        nameTech: "ReactJs",
      },
      {
        nameTech: "Python Flask",
      },
      {
        nameTech: "Netlify",
      },
      {
        nameTech: "Docker, Jenkins",
      },
    ],
    member:"1",
    role:"Full-stack"
  },
 
  
];

function Projects() {
    const [flippedIndex, setFlippedIndex] = useState(null);
  
    const handleCardClick = (index) => {
      setFlippedIndex(index === flippedIndex ? null : index);
    };
  
    return (
      <>
        <CardWrapper>
          {ProjectInfo.map((p, index) => (
            <div
              key={index}
              className={`card ${flippedIndex === index ? "flipped" : ""}`}
              
            >
              <div className="card-face card-front">
                <img src={`${p.img}`} alt="#" />
                <div className="content">
                  <h2>{p.name}</h2>
                </div>
                <ButtonWrapper>
                  <ButtonLeft>Github</ButtonLeft>
                  <ButtonRight onClick={() => handleCardClick(index)}>
                    Description
                  </ButtonRight>
                </ButtonWrapper>
              </div>
              <div className="card-face card-back">
                <div className="cardInfoWrapper">
                <h2>Description: {p.des}</h2>
                <h2>Member: {p.member}</h2>
                <h2>My role: {p.role}</h2>
                </div>
          
                <h2>
                  {p.tech.map((t, i) => (
                    <div key={i} className="tech">
                      <div className="dot"></div>
                      <div className="techName">{t.nameTech}</div>
                    </div>
                  ))}
                </h2>
                <ButtonWrapper>
                  <ButtonLeft>Live</ButtonLeft>
                  <ButtonRight onClick={() => handleCardClick(index)}>
                    Back
                  </ButtonRight>
                </ButtonWrapper>
              </div>
            </div>
          ))}
        </CardWrapper>
      </>
    );
  }
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
  width: 100%;

  button {
    width: 120px;
    height: 45px;
    border-radius: 25px;
    outline-style: none;
    cursor: pointer;
    border: none;
    font-size: var(--fontSize-button);
  }
`;
const ButtonLeft = styled.button`
  border: 2px solid black;
`;
const ButtonRight = styled.button`
  background-color: var(--button-right);
  color: var(--textbutton-right);
  outline: none;
`;
const CardWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export default Projects;
