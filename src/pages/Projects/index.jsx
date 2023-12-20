import React, { useState } from "react";
import "./Card.css";
import styled from "styled-components";
import cardDessertation from "../../assets/dissertation.jpg";
import learningSystem from "../../assets/learningSystem.jpg";
import documents from "../../assets/documents.png";
import legal from "../../assets/project_1.jpg";
const ProjectInfo = [
  {
    img: legal,
    name: "CodeHeroes Legal System, 2023",
    des: "The system allows users to look up laws and answer intelligent questions about the law",
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
    linkLive: "https://hethongphapluatcodeheroes.netlify.app/",
    linkGit: "https://github.com/duchoaang/LegalKnowledgeBot",
    member: "3",
    role: "Full-stack",
    result:
      "Improve Python Flask skills, know use Netlify to deploy system, know how to use Docker, Jenkins to build CI/CD system.",
  },

  {
    img: documents,
    name: "“Ba To Pho” Document, 2023",
    des: "A project that allows users to view, post, favorite, and comment on documents, and register.",
    tech: [
      {
        nameTech: "ReactJs",
      },
      {
        nameTech: "Python Flask",
      },

      {
        nameTech: "Figma",
      },
    ],
    linkLive: "",
    linkGit: "https://github.com/duchoaang/Ba_To_Pho",
    member: "4",
    role: "Front-end, Use ReactJs to create a view of the main page, register, profile, and list document. Call API into back-end to get info user, document and handle data from back-end response, allow users to login with Google. ",
    result:
      "Improve ReactJs skills, know to optimize the system with ReactJs, know how to integrate Google login.",
  },

  {
    img: learningSystem,
    name: "CodeHeros Learning System, 2023",
    des: "A project that allows users to view score statistics, do exercises and receive notifications from administrators",
    tech: [
      {
        nameTech: "React Native",
      },
      {
        nameTech: "Java Spring Boot",
      },

      {
        nameTech: "Bootstrap, React-paper",
      },
    ],
    linkLive: "",
    linkGit: "https://github.com/duchoaang/backend_quanlyhoctap",
    member: "1",
    role: "Full-stack, use React Native to create front-end for project. And use Java Spring Boot create RESTful API , manager interface for admin. Use Jwt for user authentication and user authorization. ",
    result:
      "Learn React Native , know about Spring, and Spring framework - Spring Boot, Spring Security, JWT, create RESTful API with Java",
  },
  {
    img: cardDessertation,
    name: "Dissertation System, 2023",
    des: "This is a project that allows user to view, and register for dissertation.",
    tech: [
      {
        nameTech: "React Native",
      },
      {
        nameTech: "Java Spring MVC",
      },

      {
        nameTech: "Material UI, Firebase",
      },
    ],
    linkLive: "",
    linkGit: "https://github.com/duchoaang/JavaProject",
    member: "2",
    role: "Front-end, use React create user interface, login Google. Call API and get response from back-end, integrate real-time chat with Fireclound.",
    result:
      "Improve ReactJs skills, know to use Firebase integrate real-time chat for users, know about SEO for website.",
  },
];

function Projects() {
  const [flippedIndices, setFlippedIndices] = useState([]);

  const handleCardClick = (index) => {
    setFlippedIndices((flippedIndices) => {
      const newFlippedIndices = [...flippedIndices];
      newFlippedIndices[index] = !newFlippedIndices[index];
      return newFlippedIndices;
    });
  };

  return (
    <>
      <section id="project" className="element-wrapper">
        <SAboutMe>Featured Projects</SAboutMe>
        <WhyChooseMe>Few project featured by me</WhyChooseMe>
        <div id="line"></div>
        <CardWrapper>
          {ProjectInfo.map((p, index) => (
            <div
              key={index}
              className={`card ${flippedIndices[index] ? "flipped" : ""}`}
            >
              <div className="card-face card-front">
                <img src={`${p.img}`} alt="#" />
                <div className="content">
                  <h2>{p.name}</h2>
                </div>
                <ButtonWrapper>
                  <a
                    href={p.linkGit}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: "15px" }}
                  >
                    <ButtonLeft>Github</ButtonLeft>
                  </a>
                  <ButtonRight onClick={() => handleCardClick(index)}>
                    Description
                  </ButtonRight>
                </ButtonWrapper>
              </div>
              <div className="card-face card-back">
                <div className="cardInfoWrapper">
                  <h2>
                    <span className="des_details">Description:</span> {p.des}
                  </h2>
                  <h2>
                    <span className="des_details">Member: </span>
                    {p.member}
                  </h2>
                  <h2>
                    <span className="des_details">My role:</span> {p.role}
                  </h2>
                  <h2>
                    <span className="des_details">Result:</span> {p.result}
                  </h2>
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
                  <a
                    href={p.linkLive}
                    target="_blank"
                    rel="noopener nore<p></p>ferrer"
                    style={{ fontSize: "15px" }}
                  >
                    <ButtonLeft>Live</ButtonLeft>
                  </a>
                  <ButtonRight onClick={() => handleCardClick(index)}>
                    Back
                  </ButtonRight>
                </ButtonWrapper>
              </div>
            </div>
          ))}
        </CardWrapper>
      </section>
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
  width: 80%;
  margin: 0 auto;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const SAboutMe = styled.h2`
  display: flex;
  margin-top: 8%;
  font-size: 35px;
  font-weight: bold;
  justify-content: center;
`;

const WhyChooseMe = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  margin-top: 20px;
`;
export default Projects;
