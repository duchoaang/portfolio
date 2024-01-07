import styled, { keyframes } from "styled-components";
import React, { useState, useEffect, useRef } from "react";
import "boxicons";
import Typed from "typed.js";
import Skills from "../Skills";
import AboutMe from "../AboutMe";
import imgMe from "../../assets/picture_3.jpg";
import Projects from "../Projects";
import Achievement from "../Achievement";
import Contact from "../Contact";
const Home = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Đức Hoàng", "Full-stack Developer"],
      typeSpeed: 100,
      backSpeed: 100,

      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  // useEffect(() => {
  //   const cards = document.querySelectorAll(".element-wrapper");
  // const observer = new IntersectionObserver(
  //   (entries) => {
  //     entries.forEach((entry) => {
  //       entry.target.classList.toggle("show", entry.isIntersecting);
  //     });

  //   },
  //   { threshold: 0.5 }
  // );

  // cards.forEach((card) => {
  //   observer.observe(card);
  // });

  // }, []);

  return (
    <>
      <ChildrenContainer>
        <StyledMain>
          <StyledLeftMain>
            <StyledLeftImage
              style={{ backgroundImage: `url(${imgMe})` }}
              src=""
            ></StyledLeftImage>
          </StyledLeftMain>
          <StyledRightMain>
            <StyledContact>
              <box-icon
                type="logo"
                name="facebook-square"
                animation="tada-hover"
              ></box-icon>
              <box-icon
                name="instagram"
                type="logo"
                animation="tada-hover"
              ></box-icon>
              <box-icon
                style={{ color: "white" }}
                animation="tada-hover"
                name="github"
                type="logo"
              ></box-icon>
            </StyledContact>
            <StyledIntroduce>
              <IntroduceWrapper>
                <IntroduceHelloIm>Hello, I'm</IntroduceHelloIm>
                <IntroduceName>Nguyen Duc Hoang</IntroduceName>
              </IntroduceWrapper>
              <TextSwitcherWrapper>
                <span style={{ fontSize: "20px" }} ref={el} />
              </TextSwitcherWrapper>

              <TextSwitcherWrapper>
                Web Development with ReactJs, React Native, Java, Python.
              </TextSwitcherWrapper>
              <ButtonWrapper>
                <a
                  href="https://www.canva.com/design/DAFuRMak9l8/81-9QJ1cnF2Qz8nfZ7L4Sg/view?utm_content=DAFuRMak9l8&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
                  target="_blank"
                >
                  <ButtonLeft>See my CV</ButtonLeft>
                </a>
                <a href="https://github.com/duchoaang" target="_blank">
                  {" "}
                  <ButtonRight>Contact Info</ButtonRight>
                </a>
              </ButtonWrapper>
            </StyledIntroduce>
          </StyledRightMain>
        </StyledMain>
      </ChildrenContainer>

      <AboutMe />
      <Skills />

      <Projects />

      <Achievement />

      <Contact />
    </>
  );
};
export default Home;

const ChildrenContainer = styled.main`
  height: 850px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledMain = styled.main`
  display: flex;
  margin-top: -100px;
  justify-content: center;
`;
const StyledLeftMain = styled.div`
  width: 340px;
  height: 340px;
  border: 1px solid rgba(109, 108, 108, 0.5);
  -webkit-background-clip: padding-box; /* for Safari */
  background-clip: padding-box;
  border-radius: 50%;
  /* box-shadow: 0 0 10px rgba(62, 61, 61, 0.5); */

  display: flex;
 @media (max-width: 390px) {
    display: none;
  }
  justify-content: center;
  align-items: center;
`;
const StyledLeftImage = styled.img`
  width: 320px;
  height: 320px;

  background-position-x: 58%;
  background-position-y: 50%;
  border-radius: 50%;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
 
`;

const StyledRightMain = styled.div`
  margin-left: 30px;
`;
const StyledContact = styled.div`
  display: flex;
  justify-content: center;
  box-icon {
    margin-right: 10px;
  }
`;
const StyledIntroduce = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
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

const slideIn = keyframes`
  0% {
    transform: translateX(-15%);
  }
  50% {
    transform: translateX(15%);
  }
  100%{
    transform: translateX(-15%);
  }

`;
const TextSwitcherWrapper = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  font-size: 20px;
  text-align: center;
`;

const AnimatedText = styled.p`
  font-size: 24px;
  animation: ${slideIn} 4s linear infinite;
`;

const WhyChooseMe = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  margin-top: 20px;
`;
const IntroduceHelloIm = styled.h2`
  font-size: 15px;
  display: flex;
  justify-content: center;
`;
const IntroduceName = styled.h2`
  font-size: 30px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;
const IntroduceWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const SAboutMe = styled.h2`
  display: flex;
  margin-top: 8%;
  font-size: 35px;
  font-weight: bold;
  justify-content: center;
`;
