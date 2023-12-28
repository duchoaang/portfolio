import styled from "styled-components";
import './Header.css'

const Header = () => {
  return (
    <>
      <StyledHeader>
        <StyleNavHeader>
          <StyleUlLeft>
            <h3>Brato</h3>
          </StyleUlLeft>
          <StyleUlRight>
            <li>Home</li>
            <li><a href="#aboutme">About me</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#project">Projects</a></li>
            <li><a href="#achievement">Achievement</a></li>
            <li><a href="#contact">Contact</a></li>
          </StyleUlRight>
        </StyleNavHeader>
      </StyledHeader>
    </>
  );
};

const StyledHeader = styled.header``;

const StyleNavHeader = styled.nav`
  display: flex;
  width: 100%;
  height: 80px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    height: auto;
  }
`;

const StyleUlLeft = styled.ul`
  display: flex;
  justify-content: center;
  width: 50%;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 10px;
  }

  @media (min-width: 1000px) and (max-width: 1600px) {
    width: 1000px;
  }
`;

const StyleUlRight = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  @media (min-width: 1200px) and (max-width: 1600px) {
    width: 100%;
    margin-bottom: 10px;
    background-color:red;
  }
  @media (min-width: 600px) and (max-width: 1200px){
    display: none;
  }

  li {
    cursor: pointer;
    position: relative;
  }

  li:after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -8px;
    left: 50%;
    background-color: #333436;
    transition: 0.3s;
    transform: translateX(-50%);
  }

  li:hover:after {
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
  }
`;

export default Header;
