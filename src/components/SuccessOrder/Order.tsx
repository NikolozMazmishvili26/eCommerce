import { useEffect } from "react";
import styled from "styled-components";
// import interface
import { cartItemsProps } from "../../App";

function Order({
  firstItem,
  cartItems,
}: {
  firstItem: cartItemsProps;
  cartItems: cartItemsProps[];
}) {
  //   total price counter

  const totalPrice = cartItems.reduce(
    (prev, { price, counterValue }) => prev + price * counterValue,
    0
  );

  return (
    <OrderContainer>
      {/* order box */}
      <ItemsBox>
        <Container>
          <FirstItem>
            {/*  */}
            <Wrapper>
              <Image src={firstItem.image} alt={firstItem.name} />
              <DescribeBox>
                <OrderName>{firstItem.name}</OrderName>
                <OrderPrice>$ {firstItem.price}</OrderPrice>
              </DescribeBox>
            </Wrapper>

            <QuantityBox>
              <Quantity>x {firstItem.counterValue}</Quantity>
            </QuantityBox>
          </FirstItem>
        </Container>
        <Other>and {cartItems.length - 1} other item(s)</Other>
      </ItemsBox>

      {/* price box */}
      <TotalPriceBox>
        <TotalPriceTitle>grand total</TotalPriceTitle>
        <GrandTotalPrice>$ {totalPrice + 50}</GrandTotalPrice>
        <Price></Price>
      </TotalPriceBox>
    </OrderContainer>
  );
}

export default Order;

//

const OrderContainer = styled.div`
  margin-top: 24px;
  @media screen and (min-width: 768px) {
    display: flex;
    margin-top: 33px;
  }
`;

const ItemsBox = styled.div`
  width: 100%;
  background-color: var(--primary-grey);
  padding: 24px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  @media screen and (min-width: 768px) {
    border-top-left-radius: 8px;
    border-top-right-radius: 0px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 0px;
  }
`;

const Container = styled.div`
  &::after {
    content: "";
    width: 100%;
    height: 1px;
    background: var(--primary-black);
    mix-blend-mode: normal;
    opacity: 0.08;
    display: block;
    margin-top: 12px;
  }
`;

const FirstItem = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 8px;
`;

const Wrapper = styled.div`
  display: flex;
  column-gap: 16px;
`;

const DescribeBox = styled.div``;

const OrderName = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 25px;
  color: var(--primary-black);
`;

const OrderPrice = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 25px;
  color: var(--primary-black);
  mix-blend-mode: normal;
  opacity: 0.5;
`;

const QuantityBox = styled.div``;

const Quantity = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 25px;
  text-align: right;
  color: var(--primary-black);
  mix-blend-mode: normal;
  opacity: 0.5;
`;

const Other = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.214286px;
  color: var(--primary-black);
  mix-blend-mode: normal;
  opacity: 0.5;
  text-align: center;
  margin-top: 12px;
`;

// price box

const TotalPriceBox = styled.div`
  width: 100%;
  background-color: var(--primary-black);
  padding: 15px 0px 19px 24px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  @media screen and (min-width: 768px) {
    border-top-left-radius: 0px;
    border-top-right-radius: 8px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const TotalPriceTitle = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  color: var(--white);
  mix-blend-mode: normal;
  opacity: 0.5;
  text-transform: uppercase;
`;

const Price = styled.p``;

const GrandTotalPrice = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  text-transform: uppercase;
  color: var(--white);
  margin-top: 8px;
`;
