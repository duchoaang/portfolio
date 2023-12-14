import styled from "styled-components";

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
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
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
`;
const StyleUlLeft = styled.ul`
  display: flex;
  justify-content: center;
  width: 50%;

  align-items: center;
`;
const StyleUlRight = styled.ul`
  display: flex;
  width: 50%;
  justify-content: space-around;
  align-items: center;
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
`;

export default Header;
