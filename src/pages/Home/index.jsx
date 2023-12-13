import styled, { keyframes } from "styled-components";
import React, { useState, useEffect } from "react";
import "boxicons";
const Home = () => {
  const [displayText, setDisplayText] = useState("Nguyễn Đức Hoàng");
  const [isFullName, setIsFullName] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFullName((prev) => !prev);
      setDisplayText(isFullName ? "FullStack developer" : "Nguyễn Đức Hoàng");
    }, 2000);

    return () => clearInterval(interval);
  }, [isFullName]);
  return (
    <>
      <StyledMain>
        <StyledLeftMain>
          <StyledLeftImage src="/src/assets/mainPicture.jpg"></StyledLeftImage>
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
            <h1>Hello, I'm Nguyen Duc Hoang</h1>
            <TextSwitcherWrapper>
              <AnimatedText>{displayText}</AnimatedText>
            </TextSwitcherWrapper>
            <h3>Web Development With React, Java, Python.</h3>
            <ButtonWrapper>
              <ButtonLeft>Hire Me</ButtonLeft>
              <ButtonRight>GetResume</ButtonRight>
            </ButtonWrapper>
          </StyledIntroduce>
        </StyledRightMain>
      </StyledMain>
    </>
  );
};
export default Home;

const StyledMain = styled.main`
  display: flex;
  justify-content: center;
`;
const StyledLeftMain = styled.div``;
const StyledLeftImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;

const StyledRightMain = styled.div``;
const StyledContact = styled.div``;
const StyledIntroduce = styled.div``;
const ButtonWrapper = styled.div``;
const ButtonLeft = styled.button``;
const ButtonRight = styled.button``;

const slideIn = keyframes`
  0% {
    transform: translateX(-30%);
  }
  100% {
    transform: translateX(0);
  }
`;
const TextSwitcherWrapper = styled.div`
  text-align: center;

`;

const AnimatedText = styled.p`
  font-size: 24px;
  animation: ${slideIn} 4s linear infinite;
`;
