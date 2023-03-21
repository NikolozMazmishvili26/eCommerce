import styled from "styled-components";

// import components
import { Banner, Categories, Products, About } from "../../components";

// import assets
import {
  imageHeaderMobile,
  imageHeaderTablet,
  imageHeaderDesktop,
} from "../../assets";

function Home() {
  return (
    <HomeComponent>
      <BackgroundImage />
      <Banner />
      <Categories />
      <Products />
      <About />
    </HomeComponent>
  );
}

export default Home;

const HomeComponent = styled.div`
  width: 100%;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0px;
  z-index: -1;
  width: 100%;
  height: 600px;
  background-image: url(${imageHeaderMobile});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media screen and (min-width: 768px) {
    height: 724px;
    background-image: url(${imageHeaderTablet});
  }

  @media screen and (min-width: 1110px) {
    background-image: url(${imageHeaderDesktop});
  }
`;
