import styled from "styled-components";

// import assets

import { gearMobile, gearTablet, gearDesktop } from "../../assets";

function About() {
  //

  const images = {
    mobile: gearMobile,
    tablet: gearTablet,
    desktop: gearDesktop,
  };

  return (
    <Container>
      <AboutImage images={images} />
      <DescriptionBox>
        <Title>
          Bringing you the <ContrastTitle>best</ContrastTitle> audio gear
        </Title>
        <Description>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </Description>
      </DescriptionBox>
    </Container>
  );
}

export default About;

const Container = styled.div`
  max-width: 1110px;
  width: 100%;
  margin: auto;
  width: 100%;
  padding: 0px 24px 120px 24px;

  @media screen and (min-width: 768px) {
    padding: 0px 40px 96px 40px;
  }
  @media screen and (min-width: 1110px) {
    padding: 0px 0px 200px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const AboutImage = styled.div<{
  images: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
}>`
  background-image: url(${(props) => props.images.mobile});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 300px;
  border-radius: 8px;
  @media screen and (min-width: 768px) {
    background-image: url(${(props) => props.images.tablet});
  }
  @media screen and (min-width: 1110px) {
    background-image: url(${(props) => props.images.desktop});
    order: 2;
    max-width: 540px;
    height: 588px;
  }
`;

const DescriptionBox = styled.div`
  margin-top: 40px;
  @media screen and (min-width: 1110px) {
    max-width: 445px;
  }
`;

const Title = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--primary-black);
  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 44px;
    letter-spacing: 1.42857px;
    margin-top: 63px;
  }
  @media screen and (min-width: 1110px) {
    text-align: start;
  }
`;

const ContrastTitle = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--primary-orange);
  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 44px;
  }
  @media screen and (min-width: 1110px) {
    text-align: start;
  }
`;

const Description = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  color: var(--primary-black);
  mix-blend-mode: normal;
  opacity: 0.5;
  margin-top: 32px;
  @media screen and (min-width: 1110px) {
    text-align: start;
  }
`;
