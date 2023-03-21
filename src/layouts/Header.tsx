import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { Location } from "@remix-run/router";

// import assets
import { Hamburger, logo, cart } from "../assets";

function Header() {
  //
  const location = useLocation();

  return (
    <HeaderComponent location={location}>
      <Content>
        <LeftSide>
          <BurgerIcon src={Hamburger} alt="burger-menu" />
          <Logo src={logo} alt="logo" />
          {/* navigation */}
          <HeaderNav>
            <NavList>
              <NavItem>home</NavItem>
              <NavItem>headphones</NavItem>
              <NavItem>speakers</NavItem>
              <NavItem>earphones</NavItem>
            </NavList>
          </HeaderNav>
        </LeftSide>
        <RightSide>
          <CartIcon src={cart} alt="cart" />
        </RightSide>
      </Content>
    </HeaderComponent>
  );
}

export default Header;

const HeaderComponent = styled.div<{ location: Location }>`
  position: relative;

  &::after {
    content: "";
    width: 100%;
    height: 1px;
    background-color: var(--white);
    display: block;
    opacity: 0.1;
  }

  @media screen and (min-width: 768px) {
    padding-left: 39px;
    padding-right: 39px;
  }

  @media screen and (min-width: 1110px) {
    max-width: 1110px;
    width: 100%;
    margin: auto;
    padding: 0px;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 24px;
  @media screen and (min-width: 768px) {
    padding: 32px 0px 32px 0px;
  }
  @media screen and (min-width: 1110px) {
    padding: 32px 0px 36px 0px;
  }
`;

const LeftSide = styled.div`
  display: flex;
  align-items: center;
  column-gap: 76px;

  @media screen and (min-width: 768px) {
    column-gap: 42px;
  }

  @media screen and (min-width: 1111px) {
    column-gap: 197px;
  }
`;

const BurgerIcon = styled.img`
  @media screen and (min-width: 1111px) {
    display: none;
  }
`;

const Logo = styled.img`
  cursor: pointer;
`;

const HeaderNav = styled.nav`
  display: none;
  @media screen and (min-width: 1111px) {
    display: block;
  }
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  column-gap: 34px;
`;

const NavItem = styled.li`
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 25px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--white);
  transition-duration: 0.2s;

  &:hover {
    cursor: pointer;
    color: var(--primary-orange);
  }
`;

// right side

const RightSide = styled.div``;

const CartIcon = styled.img`
  cursor: pointer;
`;
