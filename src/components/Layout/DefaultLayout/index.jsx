import Header from "./Header";
import styled from "styled-components";
function DefaultLayout({ children }) {
  return (
    <>
      <HomeContainer>
          <Header />
         {children}
          <div className='footer-container'>
            <div className='footer-parent'>
               
            </div>
        </div>
      </HomeContainer>
    </>
  );
}

const HomeContainer = styled.div`
  /* background-image: url("src/assets/bg.png"); */
  min-height: 870px;
  margin-bottom:100px;
`;
const ChildrenContainer = styled.div`

`
export default DefaultLayout;
