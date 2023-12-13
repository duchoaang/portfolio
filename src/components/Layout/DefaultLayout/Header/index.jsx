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
            <li>About me</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
          </StyleUlRight>
        </StyleNavHeader>
      </StyledHeader>
    </>
  );
};

const StyledHeader = styled.header`
  background-color: blue;
`;

const StyleNavHeader = styled.nav`
  display: flex;
  width: 100%;
`;
const StyleUlLeft = styled.ul`
    display: flex;
    justify-content:center;
  width: 50%;
`;
const StyleUlRight = styled.ul`
  display: flex;
  width:50%;
  justify-content: space-around;
  align-items:center;
`;

export default Header;
