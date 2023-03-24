import styled from "styled-components";
// import interface
import { cartItemsProps } from "../../App";

function SummaryItem({
  cart,
  totalPrice,
}: {
  cart: cartItemsProps;
  totalPrice: number;
}) {
  //

  const { counterValue, image, name, price } = cart;

  return (
    <Item>
      <Image src={image} alt={name} />
      <Wrapper>
        <Description>
          <Name>{name}</Name>
          <Price>$ {price}</Price>
        </Description>
        <Counter>x{counterValue}</Counter>
      </Wrapper>
    </Item>
  );
}

export default SummaryItem;

const Item = styled.li`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 8px;
`;

const Description = styled.div``;

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

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  justify-content: space-between;
  margin-left: 16px;
`;

const Counter = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 25px;
  text-align: right;
  color: var(--primary-black);
  mix-blend-mode: normal;
  opacity: 0.5;
`;
