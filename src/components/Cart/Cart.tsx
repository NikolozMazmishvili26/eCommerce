import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

// import interface
import { cartItemsProps } from "../../App";

// import component

import { SingleItem } from "../../components";
import { Link } from "react-router-dom";

interface CartProps {
  cartItems: cartItemsProps[];
  setCartItems: React.Dispatch<React.SetStateAction<cartItemsProps[]>>;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
}

function Cart({ cartItems, setCartItems, setShowCart }: CartProps) {
  //
  const [sumOfPrices, setSumOfPrices] = useState(0);

  useEffect(() => {
    const getSumOfPrices = async () => {
      const newSumOfPrices = cartItems.reduce(
        (prev, { price, counterValue }) => prev + price * counterValue,
        0
      );
      setSumOfPrices(newSumOfPrices);
    };
    getSumOfPrices();
  }, [cartItems]);

  // backdrop ref

  const backdropRef = useRef<HTMLDivElement | null>(null);

  const handleBackdrop: React.MouseEventHandler<HTMLDivElement> = (event) => {
    if (event?.target === backdropRef.current) {
      setShowCart(false);
    }
  };

  return (
    <BackDrop
      ref={backdropRef}
      onClick={handleBackdrop}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <CartContainer
        initial={{ y: "100vw" }}
        animate={{ y: "0" }}
        transition={{ type: "spring", duration: 0.3 }}
      >
        {/* cart statistic */}
        <CartStatistic>
          <ItemLength>cart ({cartItems.length})</ItemLength>
          <RemoveAllButton onClick={() => setCartItems([])}>
            Remove All
          </RemoveAllButton>
        </CartStatistic>
        {/*  */}
        <CartList>
          {cartItems.map((cart, index) => {
            return (
              <SingleItem
                key={index}
                cart={cart}
                setCartItems={setCartItems}
                cartItems={cartItems}
              />
            );
          })}
        </CartList>
        {/* total price counter */}
        <TotalPriceCounter>
          <TotalTitle>total</TotalTitle>
          <TotalCounter>$ {sumOfPrices}</TotalCounter>
        </TotalPriceCounter>
        {/* checkout button */}
        <Link to="/checkout" onClick={() => setShowCart(false)}>
          <CheckoutButton>checkout</CheckoutButton>
        </Link>
      </CartContainer>
    </BackDrop>
  );
}

export default Cart;

const BackDrop = styled(motion.div)`
  max-width: 1440px;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 9999;
  top: 92px;
  left: 50%;
  transform: translate(-50%);
  background-color: rgba(0, 0, 0, 0.4);
  padding: 24px 24px 0px 24px;
  @media screen and (min-width: 1110px) {
    top: 96px;
  }
`;

const CartContainer = styled(motion.div)`
  background-color: var(--white);
  border-radius: 8px;
  padding: 32px 28px;
  max-width: 445px;
  margin: auto;
  @media screen and (min-width: 768px) {
    width: 377px;
    position: absolute;
    right: 40px;
    padding: 31px;
  }
  @media screen and (min-width: 1250px) {
    right: 165px;
    top: 32px;
  }
`;

const CartStatistic = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ItemLength = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 1.28571px;
  text-transform: uppercase;
  color: var(--primary-black);
`;

const RemoveAllButton = styled.button`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  text-decoration-line: underline;
  color: var(--primary-black);
  mix-blend-mode: normal;
  opacity: 0.5;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const CartList = styled.ul`
  margin-top: 31px;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;

//
const TotalPriceCounter = styled.div`
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TotalTitle = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  color: var(--primary-black);
  mix-blend-mode: normal;
  opacity: 0.5;
  text-transform: uppercase;
`;

const TotalCounter = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  text-transform: uppercase;
  color: var(--primary-black);
`;

const CheckoutButton = styled.button`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--white);
  margin-top: 24px;
  width: 100%;
  height: 48px;
  background-color: var(--primary-orange);
  border: none;
  cursor: pointer;

  &:hover {
    background-color: var(--secondary-orange);
  }
`;
