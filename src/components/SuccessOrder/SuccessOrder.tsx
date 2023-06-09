import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

// import interface
import { cartItemsProps } from "../../App";
// import assets
import { orderConfirmation } from "../../assets";
// import component
import { Order } from "../../components";
// import variants
import { backdropVariants, successBoxVariants } from "./Variants";

function SuccessOrder({
  cartItems,
  setCartItems,
}: {
  cartItems: cartItemsProps[];
  setCartItems: React.Dispatch<React.SetStateAction<cartItemsProps[]>>;
}) {
  //
  const firstItem = cartItems[0];

  return (
    <Backdrop variants={backdropVariants} initial="hidden" animate="visible">
      <SuccessBox variants={successBoxVariants}>
        <SuccessImage src={orderConfirmation} alt="success" />
        <SuccessTitle>thank your for your order</SuccessTitle>
        <Description>
          You will receive an email confirmation shortly.
        </Description>
        {/* order component */}
        <Order firstItem={firstItem} cartItems={cartItems} />
        {/* order component */}
        <Link to="/">
          <HomeButton onClick={() => setCartItems([])}>back to home</HomeButton>
        </Link>
      </SuccessBox>
    </Backdrop>
  );
}

export default SuccessOrder;

const Backdrop = styled(motion.div)`
  position: fixed;
  max-width: 1440px;
  width: 100%;
  top: 0px;
  left: 50%;
  transform: translate(-50%);
  height: 100%;
  padding-left: 24px;
  padding-right: 24px;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  z-index: 99999;
`;

const SuccessBox = styled(motion.div)`
  max-width: 540px;
  width: 100%;
  background-color: var(--white);
  border-radius: 8px;
  padding: 32px;
  margin: auto;
  /* margin-top: 132px; */
  @media screen and (min-width: 768px) {
    padding: 48px;
    /* margin-top: 59px; */
  }
  @media screen and (min-width: 1110px) {
    /* margin-top: 150px; */
  }
`;

const SuccessImage = styled.img``;

const SuccessTitle = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0.857143px;
  text-transform: uppercase;
  color: var(--primary-black);
  margin-top: 23px;
  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 36px;
    letter-spacing: 1.14286px;
    max-width: 294px;
    margin-top: 33px;
  }
`;

const Description = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  color: var(--primary-black);
  mix-blend-mode: normal;
  opacity: 0.5;
  margin-top: 16px;
  @media screen and (min-width: 768px) {
    margin-top: 24px;
  }
`;

const HomeButton = styled.button`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--white);
  width: 100%;
  height: 48px;
  background-color: var(--primary-orange);
  margin-top: 23px;
  border: none;
  cursor: pointer;
  transition-duration: 0.2s;

  &:hover {
    background-color: var(--secondary-orange);
  }

  @media screen and (min-width: 768px) {
    margin-top: 46px;
  }
`;
