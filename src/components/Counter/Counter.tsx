import { useEffect, useState } from "react";
import styled from "styled-components";

// import component

import { Button, AddToCartMessage } from "../../components";

// import assets
import { increment, decrement } from "../../assets";

// import interface
import { cartItemsProps } from "../../App";

interface CounterProps {
  categoryImage: string;
  name: string;
  price: number;
  setCartItems: React.Dispatch<React.SetStateAction<cartItemsProps[]>>;
  cartItems: cartItemsProps[];
}

function Counter({
  categoryImage,
  name,
  price,
  setCartItems,
  cartItems,
}: CounterProps) {
  //
  const [countValue, setCountValue] = useState(1);
  const [showSuccessMessage, setShowSuccessMessage] = useState<
    boolean | string
  >(false);

  const handleDecrement = () => {
    if (countValue !== 1) {
      setCountValue(countValue - 1);
    }
  };

  const addToCart = () => {
    //
    const existingItemIndex = cartItems.findIndex(
      (item) => item.name === name && item.image === categoryImage
    );

    if (existingItemIndex !== -1) {
      setShowSuccessMessage("updated");
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].counterValue = countValue;
      setCartItems(updatedCartItems);
    } else {
      setShowSuccessMessage(true);
      setCartItems([
        ...cartItems,
        {
          id: new Date().getTime().toString(),
          image: categoryImage,
          name: name,
          price: price,
          counterValue: countValue,
        },
      ]);
    }
  };

  return (
    <CartCounterContainer>
      <CounterBox>
        <CounterImage
          src={decrement}
          alt="decrement"
          onClick={handleDecrement}
        />
        <CounterValue>{countValue}</CounterValue>
        <CounterImage
          src={increment}
          alt="increment"
          onClick={() => setCountValue(countValue + 1)}
        />
      </CounterBox>
      <Button
        title="add to cart"
        backgroundColor="var(--primary-orange)"
        border="none"
        color="var(--white)"
        hoverColor="var(--secondary-orange)"
        handleAddToCart={addToCart}
      />
      {/* Add To Cart Success Message Component */}
      {showSuccessMessage && (
        <AddToCartMessage
          message="Product add to cart"
          setShowSuccessMessage={setShowSuccessMessage}
        />
      )}
      {showSuccessMessage === "updated" && (
        <AddToCartMessage
          message="Product updated in cart"
          setShowSuccessMessage={setShowSuccessMessage}
        />
      )}
    </CartCounterContainer>
  );
}

export default Counter;

// cart

const CartCounterContainer = styled.div`
  margin-top: 31px;
  display: flex;
  column-gap: 16px;
  @media screen and (min-width: 1110px) {
    margin-top: 47px;
  }
`;

const CounterBox = styled.div`
  width: 120px;
  height: 48px;
  background-color: var(--primary-grey);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 16px;
  padding-right: 16px;
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

const CounterImage = styled.img`
  cursor: pointer;
`;

const AddCartButton = styled.button``;
