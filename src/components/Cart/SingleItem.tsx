import { useEffect, useState } from "react";
import styled from "styled-components";

// import interface
import { cartItemsProps } from "../../App";

// import assets

import { increment, decrement } from "../../assets";

function SingleItem({
  cart,
  setCartItems,
  cartItems,
}: {
  cart: cartItemsProps;
  setCartItems: React.Dispatch<React.SetStateAction<cartItemsProps[]>>;
  cartItems: cartItemsProps[];
}) {
  //
  const { counterValue, image, name, price } = cart;
  //
  const [currentCounterValue, setCurrentCounterValue] = useState(counterValue);

  // for get
  useEffect(() => {
    setCurrentCounterValue(counterValue);
  }, [counterValue]);

  // for increase quantity and update counter value in array

  const handleIncrement = () => {
    const updatedItems = cartItems.map((item) => {
      if (item.name === name) {
        return {
          ...item,
          counterValue: currentCounterValue + 1,
        };
      }
      return item;
    });
    setCartItems(updatedItems);
    setCurrentCounterValue(currentCounterValue + 1);
  };

  // for decrease quantity and update counter value in array

  const handleDecrement = () => {
    if (currentCounterValue !== 1) {
      const updatedItems = cartItems.map((item) => {
        if (item.name === name) {
          return {
            ...item,
            counterValue: currentCounterValue - 1,
          };
        }
        return item;
      });
      setCartItems(updatedItems);
      setCurrentCounterValue(currentCounterValue - 1);
    }
  };

  return (
    <CartItem>
      <Image src={image} />
      <CartDescribe>
        <Name>{name}</Name>
        <Price>$ {price}</Price>
      </CartDescribe>
      <CounterBox>
        <CounterImage
          src={decrement}
          alt="decrement"
          onClick={handleDecrement}
        />
        <CounterValue>{currentCounterValue}</CounterValue>
        <CounterImage
          src={increment}
          alt="increment"
          onClick={handleIncrement}
        />
      </CounterBox>
    </CartItem>
  );
}

export default SingleItem;

const CartItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 16px;
`;

const Image = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 8px;
  object-fit: cover;
`;

const CartDescribe = styled.div`
  width: 100px;
`;

const Name = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 25px;
  color: var(--primary-black);
`;

const Price = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 25px;
  color: var(--primary-black);
  mix-blend-mode: normal;
  opacity: 0.5;
`;

// counter

const CounterBox = styled.div`
  width: 92px;
  height: 32px;
  background-color: var(--primary-grey);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 12px;
  padding-right: 12px;
`;

const CounterImage = styled.img`
  cursor: pointer;
`;

const CounterValue = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--primary-black);
`;
