import { Link } from "react-router-dom";
import styled from "styled-components";

// import assets

import {
  zx7SpeakerMobile,
  zx7SpeakerTablet,
  zx7SpeakerDesktop,
} from "../../../assets";

// import component
import { Button } from "../../Button";

function Zx7Speaker() {
  //

  const images = {
    mobile: zx7SpeakerMobile,
    tablet: zx7SpeakerTablet,
    desktop: zx7SpeakerDesktop,
  };

  return (
    <Container images={images}>
      <Title>ZX7 SPEAKER</Title>
      <Link to="/productDetail/zx7-speaker">
        <Button
          title="see product"
          backgroundColor="transparent"
          border="1px solid var(--primary-black)"
          color="var(--primary-color)"
          hoverColor="var(--primary-black)"
        />
      </Link>
    </Container>
  );
}

export default Zx7Speaker;

const Container = styled.div<{
  images: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
}>`
  background-image: url(${(props) => props.images.mobile});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 320px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 32px;
  padding-left: 24px;
  @media screen and (min-width: 768px) {
    background-image: url(${(props) => props.images.tablet});
    padding-left: 62px;
  }
  @media screen and (min-width: 1110px) {
    background-image: url(${(props) => props.images.desktop});
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
