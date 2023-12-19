import styled from "styled-components";
import { useState, useEffect } from "react";
import {
  faCoffee,
  faUser,
  faEnvelope,
  faTimes,
  faUserTimes,
  faClock,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const skillsFrontend = [
  {
    name: "ReactJS",
  },
  {
    name: "HTML5",
  },
  {
    name: "Bootstrap",
  },
  {
    name: "CSS",
  },
  {
    name: "Tailwind",
  },
];
const skillsBackend = [
  {
    name: "Java Spring Boot",
  },
  {
    name: "Python Flask",
  },
];
const skillsDevops = [
  {
    name: "Netlify",
  },
];
function Skills() {
  const skillTopics = [
    {
      icon: "faTimes",
      topicName: "Front-end Development",
      href: "#frontend",
    },
    {
      icon: "faUser",
      topicName: "Back-end Development",
      href: "#backend",
    },
  
    {
      icon: "faUser",
      topicName: "Devops",
      href: "#devops",
    },
  ];

  return (
    <>
  <section id="skills">
        <SkillsWrapper>
          <SAboutMe>Skills</SAboutMe>
          <WhyChooseMe>Languages, Frameworks...</WhyChooseMe>
          <div id="line"></div>
  
          <SkillsDetails>
            <DetailsLeft>
              <BulletIcons></BulletIcons>
              <Bullets>
                {skillTopics.map((topic, index) => {
                  return (
                    <>
                      <WrapperBullet>
                        <FontAwesomeIcon icon={faClock} />
                        <BulletText href={topic.href}>
                          {topic.topicName}
                        </BulletText>
                      </WrapperBullet>
                    </>
                  );
                })}
              </Bullets>
            </DetailsLeft>
            <DetailsRight>
              <h2 id="frontend" style={{ minHeight: "100%" }}>
                {skillsFrontend.map((frontend, index) => {
                  return (
                    <>
                      <SkillsDetailsWrapper>
                        <SkillLeft>
                          <Dot></Dot>
                          <LeftText key={index}>{frontend.name}</LeftText>
                        </SkillLeft>
                        <FontAwesomeIcon icon={faCheckCircle} />
                      </SkillsDetailsWrapper>
                    </>
                  );
                })}
              </h2>
              <h2 id="backend" style={{ minHeight: "100%" }}>
                {skillsBackend.map((backend, index) => {
                  return (
                    <>
                      <SkillsDetailsWrapper>
                        <SkillLeft>
                          <Dot></Dot>
                          <LeftText key={index}>{backend.name}</LeftText>
                        </SkillLeft>
                        <FontAwesomeIcon icon={faCheckCircle} />
                      </SkillsDetailsWrapper>
                    </>
                  );
                })}
              </h2>
              <h2 id="devops" style={{ minHeight: "100%" }}>
                {skillsDevops.map((dev, index) => {
                  return (
                    <>
                      <SkillsDetailsWrapper>
                        <SkillLeft>
                          <Dot></Dot>
                          <LeftText key={index}>{dev.name}</LeftText>
                        </SkillLeft>
                        <FontAwesomeIcon icon={faCheckCircle} />
                      </SkillsDetailsWrapper>
                    </>
                  );
                })}
              </h2>
            </DetailsRight>
          </SkillsDetails>
        </SkillsWrapper>
  </section>
    </>
  );
}
const SkillLeft = styled.div`
  display: flex;
`;
const SAboutMe = styled.h2`
  display: flex;
  font-size: 35px;
  font-weight: bold;
  justify-content: center;
`;
const WhyChooseMe = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
  margin-top: 20px;
`;

const SkillsWrapper = styled.div`
  margin-top: 8%;
`;

const SkillsDetails = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;
  height: 300px;
`;
const DetailsLeft = styled.div`
  width: 35%;
  box-shadow: 15px 0 9px -15px #1f2235;
  position: relative;
`;
const DetailsRight = styled.div`
  width: 65%;
  height: 100%;
  overflow-y: hidden;
  scroll-behavior: smooth;
`;

const BulletIcons = styled.div`
  background-color: #efddce;
  height: 100%;
  position: absolute;
  width: 34px;
  z-index: 1;
`;
const Bullets = styled.div`
  height: 100%;
  justify-content:space-around;
  display: flex;
  flex-direction: column;
`;
const BulletText = styled.a`
  /* position: relative;
  z-index: 2; */
  /* background-color: #efddce; */
  margin-left: 15px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  padding-left: 10px;
`;
const WrapperBullet = styled.div`
  position: relative;
  margin-left: 1%;
  margin-right: 10px;
  display: flex;
  align-items: center;
  z-index: 2;
  height: 50px;
  width: 80%;
  transition: width 0.3s ease;
  &:hover {
    background-color: #efddce;
  }
`;
const Dot = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 20px;
  /* background-color: red; */
`;
const SkillsDetailsWrapper = styled.div`
  display: flex;
  width: 90%;
  padding-bottom:5px;
  padding-top:10px;
  margin: 0 auto;
  justify-content: space-between;
`;
const LeftText = styled.h2`
  font-size: 22px !important;
`;

export default Skills;
