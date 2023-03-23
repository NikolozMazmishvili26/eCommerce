import styled from "styled-components";

// import assets

import { logo, facebook, twitter, instagram } from "../assets";

function Footer() {
  return (
    <FooterContainer>
      <Line />
      <NavigationContainer>
        <Logo src={logo} alt="logo" />
        <FooterNav>
          <NavList>
            <NavItem>home</NavItem>
            <NavItem>headphones</NavItem>
            <NavItem>speakers</NavItem>
            <NavItem>earphones</NavItem>
          </NavList>
        </FooterNav>
      </NavigationContainer>
      <DescriptionContainer>
        {/*  */}
        <DescriptionBox>
          <Description>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </Description>
          <Copyright>Copyright 2023. All Rights Reserved</Copyright>
        </DescriptionBox>
        {/*  */}
        <SocialMediaBox>
          <SocialImage src={facebook} alt="facebook" />
          <SocialImage src={twitter} alt="twitter" />
          <SocialImage src={instagram} alt="instagram" />
        </SocialMediaBox>
      </DescriptionContainer>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.footer`
  position: relative;
  background-color: var(--secondary-black);
  padding: 52px 24px 38px 24px;
  @media screen and (min-width: 768px) {
    padding: 60px 40px 46px 39px;
  }
  @media screen and (min-width: 1110px) {
    padding: 75px 167px 48px 167px;
  }
`;

const Line = styled.div`
  position: absolute;
  width: 101px;
  height: 4px;
  background-color: var(--primary-orange);
  top: 0px;
  left: 50%;
  transform: translate(-50%);
  @media screen and (min-width: 768px) {
    left: auto;
    transform: none;
  }
`;

// nav styles
const NavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    align-items: flex-start;
  }
  @media screen and (min-width: 1110px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const Logo = styled.img``;

const FooterNav = styled.nav`
  margin-top: 48px;
  @media screen and (min-width: 768px) {
    margin-top: 32px;
  }
  @media screen and (min-width: 1110px) {
    margin-top: 0px;
  }
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    row-gap: 0px;
    column-gap: 34px;
  }
`;
const NavItem = styled.li`
  color: var(--white);
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 25px;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-align: center;
  transition-duration: 0.2s;
  &:hover {
    cursor: pointer;
    color: var(--primary-orange);
  }
`;

// description styles
const DescriptionContainer = styled.div`
  margin-top: 48px;
  @media screen and (min-width: 1110px) {
    margin-top: 36px;
  }
`;

const DescriptionBox = styled.div``;

const Description = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  color: var(--white);
  mix-blend-mode: normal;
  opacity: 0.5;
  @media screen and (min-width: 768px) {
    text-align: start;
  }
  @media screen and (min-width: 1110px) {
    max-width: 540px;
  }
`;

const Copyright = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 25px;
  color: var(--white);
  mix-blend-mode: normal;
  opacity: 0.5;
  margin-top: 48px;
  text-align: center;
  @media screen and (min-width: 768px) {
    text-align: start;
    margin-top: 80px;
  }
  @media screen and (min-width: 1110px) {
    margin-top: 56px;
  }
`;

const SocialMediaBox = styled.div`
  margin-top: 48px;
  display: flex;
  justify-content: center;
  column-gap: 16px;
  @media screen and (min-width: 768px) {
    position: absolute;
    bottom: 46px;
    right: 40px;
  }
  @media screen and (min-width: 1110px) {
    bottom: 136px;
    right: 167px;
  }
`;

const SocialImage = styled.img`
  cursor: pointer;
`;
