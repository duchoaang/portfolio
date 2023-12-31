import styled from "styled-components";
import { useState, useEffect } from "react";
import imgMe from "../../assets/mainPicture.jpg";
function AboutMe() {
  const [highlightText, setHighlightText] = useState([
    {
      context: "Build Front-end Website with ReactJs",
    },
    {
      context: "Build Back-end Website with Java, Python",
    },
    {
      context: "Build RESTful API",
    },
    {
      context: "Integration CI/CD ",
    },
    {
      context: "Build Moblie App with React Native",
    },
  ]);
  return (
    <>
      <section id="aboutme" className="element-wrapper">
        <SAboutMe>About Me</SAboutMe>
        <WhyChooseMe>Why Choose Me?</WhyChooseMe>
        <div id="line"></div>
        <IntroduceBookWrapper>
          <IntroduceBookLeft
            style={{ backgroundImage: `url(${imgMe})` }}
          ></IntroduceBookLeft>
          <IntroduceBookRight>
            <ItemWrapper>
              <TextRight>
                My name is Hoang. I’m 21 years old and currently live in HCM
                City. I’m a senior attending HCMC Open University in the Faculty
                of Information Technology, particularly web design. I'm looking
                for a position as a fresher developer. I have already met the
                requirements for subjects and projects related to the job.
                Moreover, I learned specialized skills as improved personal
                skills that are needed for the demand of these positions:
                Full-Stack Developer, Software Engineer Website Developer.
              </TextRight>
              <FewHighlightWrapper>
                <FewHighlight>Here are a few highlights</FewHighlight>
                <HightLight>
                  {highlightText.map((text, index) => {
                    return (
                      <>
                        <HightLightWrapperItem>
                          <HightLightDot></HightLightDot>
                          <HightLightText>{text.context}</HightLightText>
                        </HightLightWrapperItem>
                      </>
                    );
                  })}
                </HightLight>
              </FewHighlightWrapper>
              <ButtonWrapper>
                <a
                  href="https://www.canva.com/design/DAFuRMak9l8/81-9QJ1cnF2Qz8nfZ7L4Sg/view?utm_content=DAFuRMak9l8&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
                  target="_blank"
                >
                  <ButtonLeft>See my CV</ButtonLeft>
                </a>
                <a href="https://github.com/duchoaang" target="_blank">
                  {" "}
                  <ButtonRight>View my Github</ButtonRight>
                </a>
              </ButtonWrapper>
            </ItemWrapper>
          </IntroduceBookRight>
        </IntroduceBookWrapper>
      </section>
    </>
  );
}

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
const IntroduceBookWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 60%;
  margin: 0 auto;
  margin-top: 20px;
  min-height: 800px;
   @media (max-width: 390px) {
    height:500px;
    overflow:scroll
  }

  box-shadow: 0 0 20px -2px #1f2235;

  @media (min-width: 1200px) and (max-width: 1600px) {
    width: 80%;

    min-height: 870px;
  }
  @media (min-width: 600px) and (max-width: 1200px) {
    width: 80%;

    min-height: 870px;
  }
`;
const IntroduceBookLeft = styled.div`
  background-color: blue;
  flex: 1;
  @media (max-width: 390px) {
    display: none;
  }

  background-position-x: 50%;
  background-position-y: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  transition: 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;
const IntroduceBookRight = styled.div`
  flex: 1;
`;
const TextRight = styled.h2`
  font-size: var(--fontSize-normal);

  font-weight: 500;

  line-height: 35px;
`;
const ButtonWrapper = styled.div`
  justify-self: flex-end;
  display: flex;
  justify-content: space-around;
  
  button {
    width: 100%;
    padding-left: 25px;
    padding-right: 25px;
    border-radius: 25px;
    outline: none;
    border: none;
    font-size: var(--fontSize-button);

    height: 50px;
  }
   @media (max-width: 390px) {
    flex-direction:column;
    button{
      margin-top:20px;
     padding:0;
    }
   
  }
`;
const ButtonLeft = styled.button`
  width: 100%;
`;
const ButtonRight = styled.button`
  background-color: var(--button-right);
  color: var(--textbutton-right);
`;
const ItemWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 20px;
`;
const FewHighlightWrapper = styled.div`
  margin-top: 18%;
  margin-bottom: 10%;
`;
const FewHighlight = styled.div``;
const HightLight = styled.div``;
const HightLightWrapperItem = styled.div`
  display: flex;

  align-items: center;
`;
const HightLightDot = styled.div`
  border-radius: 50%;
  margin-right: 10px;
  height: 10px;
  width: 10px;
  background-color: var(--color-dot);
`;
const HightLightText = styled.h2`
  font-size: var(--fontSize-normal);
`;

export default AboutMe;
