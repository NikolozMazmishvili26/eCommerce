import styled from "styled-components";

// import interface
import { cartItemsProps } from "../../App";

// import component

import { SingleItem } from "../../components";

interface CartProps {
  cartItems: cartItemsProps[];
  setCartItems: React.Dispatch<React.SetStateAction<cartItemsProps[]>>;
}

function Cart({ cartItems, setCartItems }: CartProps) {
  //

  const sumOfPrices = cartItems.reduce((prev, { price }) => prev + price, 0);

  return (
    <CartContainer>
      <CartList>
        {cartItems.map((cart, index) => {
          return <SingleItem key={index} cart={cart} />;
        })}
        <p>jami {sumOfPrices}</p>
      </CartList>
    </CartContainer>
  );
}

export default Cart;

const CartContainer = styled.div`
  background-color: white;
  width: 500px;
  height: 400px;
  position: absolute;
  top: 93px;
`;

const CartList = styled.ul``;
