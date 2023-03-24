import styled from "styled-components";

// import components
import { Button } from "../Button";

import {
  imageHeaderMobile,
  imageHeaderTablet,
  imageHeaderDesktop,
} from "../../assets";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <Container>
      <Content>
        <BannerDescribe>new product</BannerDescribe>

        <Title>XX99 Mark II HeadphoneS</Title>
        <Description>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </Description>
        <Link to="/productDetail/xx99-mark-two-headphones">
          <Button
            title="see product"
            backgroundColor="var(--primary-orange)"
            border="none"
            hoverColor="var(--secondary-orange)"
            color="var(--white)"
          />
        </Link>
      </Content>
    </Container>
  );
}

export default Banner;

const Container = styled.div`
  height: 510px;
  padding: 108px 24px 112px 24px;

  @media screen and (min-width: 768px) {
    height: 639px;
    padding: 126px 195px 167px 195px;
  }

  @media screen and (min-width: 1110px) {
    align-items: flex-start;
    padding: 128px 0px 0px 158px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 1110px) {
    max-width: 379px;
    width: 100%;
    align-items: flex-start;
  }
`;

const BannerDescribe = styled.h4`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 10px;
  text-transform: uppercase;
  color: var(--white);
  mix-blend-mode: normal;
  opacity: 0.5;
`;

const Title = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 40px;
  text-align: center;
  letter-spacing: 1.28571px;
  text-transform: uppercase;
  color: var(--white);
  margin-top: 16px;
  margin-bottom: 24px;
  @media screen and (min-width: 768px) {
    font-size: 56px;
    line-height: 58px;
    margin-top: 24px;
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
  color: var(--white);
  mix-blend-mode: normal;
  opacity: 0.75;
  margin-bottom: 28px;
  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
  @media screen and (min-width: 1110px) {
    text-align: start;
  }
`;
