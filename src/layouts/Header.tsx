import { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation, Link } from "react-router-dom";
import { Location } from "@remix-run/router";

// import component
import { Cart } from "../components";

// import assets
import { Hamburger, logo, cart, close } from "../assets";

// import interface
import { cartItemsProps } from "../App";

interface HeaderProps {
  cartItems: cartItemsProps[];
  setCartItems: React.Dispatch<React.SetStateAction<cartItemsProps[]>>;
}

function Header({ cartItems, setCartItems }: HeaderProps) {
  //
  const [showMenu, setShowMenu] = useState(false);
  const [showCart, setShowCart] = useState(true);

  useEffect(() => {
    document.body.style.overflow = showMenu ? "hidden" : "unset";
  }, [showMenu]);

  //
  const location = useLocation();

  return (
    <Container location={location}>
      <HeaderComponent location={location}>
        <Content>
          <LeftSide>
            {showMenu ? (
              <CloseMenu
                src={close}
                alt="close"
                onClick={() => setShowMenu(false)}
              />
            ) : (
              <OpenMenu
                src={Hamburger}
                alt="burger-menu"
                onClick={() => setShowMenu(true)}
              />
            )}

            <Logo src={logo} alt="logo" />
            {/* navigation */}
            <HeaderNav>
              <NavList>
                <Link to="/">
                  <NavItem>home</NavItem>
                </Link>
                <Link to="/category/headphones">
                  <NavItem>headphones</NavItem>
                </Link>
                <Link to="/category/speakers">
                  <NavItem>speakers</NavItem>
                </Link>
                <Link to="/category/earphones">
                  <NavItem>earphones</NavItem>
                </Link>
              </NavList>
            </HeaderNav>
          </LeftSide>
          <RightSide>
            <CartIcon src={cart} alt="cart" />
          </RightSide>
        </Content>
        {/* Cart Component */}
        {showCart && <Cart cartItems={cartItems} setCartItems={setCartItems} />}
        {/*  */}
        {showMenu && (
          <Backdrop>
            <Menu>
              <MenuContainer>
                <NavList>
                  <Link to="/" onClick={() => setShowMenu(false)}>
                    <NavItem>home</NavItem>
                  </Link>
                  <Link
                    to="/category/headphones"
                    onClick={() => setShowMenu(false)}
                  >
                    <NavItem>headphones</NavItem>
                  </Link>
                  <Link
                    to="/category/speakers"
                    onClick={() => setShowMenu(false)}
                  >
                    <NavItem>speakers</NavItem>
                  </Link>
                  <Link
                    to="/category/earphones"
                    onClick={() => setShowMenu(false)}
                  >
                    <NavItem>earphones</NavItem>
                  </Link>
                </NavList>
              </MenuContainer>
            </Menu>
          </Backdrop>
        )}
      </HeaderComponent>
    </Container>
  );
}

export default Header;

const Container = styled.div<{ location: Location }>`
  background-color: ${(props) =>
    props.location.pathname !== "/" && "var(--primary-black)"};
`;

const HeaderComponent = styled.div<{ location: Location }>`
  position: relative;
  background-color: ${(props) =>
    props.location.pathname !== "/" && "var(--primary-black)"};

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

const OpenMenu = styled.img`
  width: 16px;
  height: 16px;
  cursor: pointer;
  @media screen and (min-width: 1110px) {
    display: none;
  }
`;

const CloseMenu = styled(OpenMenu)``;

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
  align-items: flex-start;
  flex-direction: column;
  column-gap: 34px;
  row-gap: 32px;
  @media screen and (min-width: 1110px) {
    flex-direction: row;
    align-items: center;
    row-gap: 0px;
  }
`;

const NavItem = styled.li`
  font-size: 24px;
  line-height: 25px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  transition-duration: 0.2s;
  color: var(--white);

  @media screen and (min-width: 1110px) {
    font-size: 13px;
    line-height: 25px;
  }

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

// Backdrop

const Backdrop = styled.div`
  width: 100%;
  height: calc(100vh - 90px);
  position: absolute;
  z-index: 9999;
  top: 90px;
  left: 0px;
  background-color: rgba(0, 0, 0, 0.5);
  transition: height 2s ease-in;
  @media screen and (min-width: 1110px) {
    display: none;
  }
`;

const Menu = styled.div`
  background: var(--primary-black);
`;

const MenuContainer = styled.div`
  padding: 48px 0px 48px 24px;
`;
