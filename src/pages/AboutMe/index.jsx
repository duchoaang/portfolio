import styled from "styled-components";
import { useState, useEffect } from "react";
function AboutMe() {
  

  

  const [highlightText, setHighlightText] = useState([
    {
      context: "Build RestFul API with Java, Python",
    },
    {
      context: "Build Front-end Website with ReactJs",
    },
    {
      context: "Build Moblie App with React Native",
    },
  ]);
  return (
    <>
      <section id="aboutme">
        <SAboutMe >About Me</SAboutMe>
        <WhyChooseMe>Why Choose Me?</WhyChooseMe>
        <Line></Line>
        <IntroduceBookWrapper>
          <IntroduceBookLeft></IntroduceBookLeft>
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
                Full-Stack Developer Software Designer Website Developer.
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
                <ButtonLeft>Download CV</ButtonLeft>
                <ButtonRight>View my Github</ButtonRight>
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
  min-height: 700px;

  box-shadow: 0 0 20px -2px #1f2235;
`;
const IntroduceBookLeft = styled.div`
  background-color: blue;
  flex: 1;
  background-image: url("/src/assets/mainPicture.jpg");
  background-position-x: 50%;
  background-position-y: 100%;
  background-repeat: no-repeat;
  background-size: cover;
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
    width: 30%;
    border-radius: 25px;
    outline: none;
    border: none;
    font-size: var(--fontSize-button);

    height: 50px;
  }
`;
const ButtonLeft = styled.button``;
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
const Line = styled.div`
    background-color:var(--line-color);
    width:180px;
 
    height:4px;
    display: flex;
    justify-content:center;
    margin:0 auto;
    margin-top:1%;
      margin-bottom: 50px;
   
`

export default AboutMe;
