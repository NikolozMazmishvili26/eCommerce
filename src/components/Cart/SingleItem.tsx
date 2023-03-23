import styled from "styled-components";

// import interface
import { cartItemsProps } from "../../App";

function SingleItem({ cart }: { cart: cartItemsProps }) {
  //
  const { counterValue, image, name, price } = cart;

  return (
    <CartItem>
      <p>{name}</p>
      <span>{price}</span>
    </CartItem>
  );
}

export default SingleItem;

const CartItem = styled.li``;

const Image = styled.img``;
