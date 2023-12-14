import styled from "styled-components";

function AboutMe() {
  return (
    <>
      <SAboutMe>About Me</SAboutMe>
      <WhyChooseMe>Why Choose Me?</WhyChooseMe>
      <IntroduceBookWrapper>
        <IntroduceBookLeft></IntroduceBookLeft>
        <IntroduceBookRight>
          <ItemWrapper>
              <TextRight>
                My name is Hoang. I’m 21 years old and currently live in HCM City.
                I’m a senior attending HCMC Open University in the Faculty of
                Information Technology, particularly web design. I'm looking for a
                position as a fresher developer. I have already met the requirements
                for subjects and projects related to the job. Moreover, I learned
                specialized skills as improved personal skills that are needed for
                the demand of these positions: Full-Stack Developer Software
                Designer Website Developer.
              </TextRight>
              <ButtonWrapper>
                <ButtonLeft>Download CV</ButtonLeft>
                <ButtonRight>View my Github</ButtonRight>
              </ButtonWrapper>
          </ItemWrapper>
        </IntroduceBookRight>
      </IntroduceBookWrapper>
    </>
  );
}

const SAboutMe = styled.h2`
  display: flex;
  font-size: 35px;
  justify-content: center;
`;
const WhyChooseMe = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 14px;
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
  /* border:1px solid; */
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
    font-size:15px;

    font-weight:500;
 

    line-height:35px;
`;
const ButtonWrapper = styled.div`
    display:flex;
    justify-content:space-around;
    button{
        width:48%;
        border-radius:20px;
        outline:none;
        border:none;
        font-size:20px;
        height:50px;
    }
`;
const ButtonLeft = styled.button``;
const ButtonRight = styled.button``;
const ItemWrapper = styled.div`
    width: 80%;
    margin:0 auto;
    margin-top:20px;

`;
export default AboutMe;
