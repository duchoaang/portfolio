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
                <img src={('/src/assets/shape-bg.png')} alt='not available'></img>
            </div>
        </div>
      </HomeContainer>
    </>
  );
}

const HomeContainer = styled.div`
  /* background-image: url("src/assets/bg.png"); */
  min-height: 870px;
`;
const ChildrenContainer = styled.div`

`
export default DefaultLayout;
