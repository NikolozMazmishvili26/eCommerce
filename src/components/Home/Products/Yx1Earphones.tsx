import { Link } from "react-router-dom";
import styled from "styled-components";

// import assets

import {
  yx1EarphonesMobile,
  yx1EarphonesTablet,
  yx1EarphonesDesktop,
} from "../../../assets";

// import component
import { Button } from "../../Button";

function Yx1Earphones() {
  //
  const images = {
    mobile: yx1EarphonesMobile,
    tablet: yx1EarphonesTablet,
    desktop: yx1EarphonesDesktop,
  };

  return (
    <Container>
      <BackgroundImage images={images} />
      <Descripbtion>
        <Title>yx1 earphones</Title>
        <Link to="/productDetail/yx1-earphones">
          <Button
            title="see product"
            backgroundColor="transparent"
            border="1px solid var(--primary-black)"
            color="var(--primary-color)"
            hoverColor="var(--primary-black)"
          />
        </Link>
      </Descripbtion>
    </Container>
  );
}

export default Yx1Earphones;

const Container = styled.div`
  width: 100%;
  display: grid;
  row-gap: 24px;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 11px;
  }
  @media screen and (min-width: 1110px) {
    column-gap: 30px;
  }
`;

// left side
const BackgroundImage = styled.div<{
  images: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
}>`
  background-image: url(${(props) => props.images.mobile});
  background-position: center;
  background-size: cover;
  height: 200px;
  width: 100%;
  border-radius: 8px;
  @media screen and (min-width: 768px) {
    background-image: url(${(props) => props.images.tablet});
    height: 320px;
  }
  @media screen and (min-width: 1110px) {
    background-image: url(${(props) => props.images.desktop});
  }
`;

// right side
const Descripbtion = styled.div`
  padding: 41px 56px 41px 24px;
  background-color: var(--primary-grey);
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  border-radius: 8px;
  @media screen and (min-width: 768px) {
    height: 320px;
    justify-content: center;
  }
  @media screen and (min-width: 1110px) {
    padding-left: 95px;
  }
`;

const Title = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--primary-black);
`;
