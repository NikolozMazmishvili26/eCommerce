import styled from "styled-components";

// import interface
import { cartItemsProps } from "../../App";

// import component

import { SummaryItem } from "../../components";

function Summary({ cartItems }: { cartItems: cartItemsProps[] }) {
  //
  const totalPrice = cartItems.reduce(
    (prev, { price, counterValue }) => prev + price * counterValue,
    0
  );

  return (
    <Container>
      <SummaryTitle>summary</SummaryTitle>
      <SummaryList>
        {cartItems.map((cart) => {
          return (
            <SummaryItem key={cart.id} cart={cart} totalPrice={totalPrice} />
          );
        })}
      </SummaryList>
      {/*  */}
      <PriceContainer>
        <PriceStatistic>
          <Title>total</Title>
          <Price>$ {totalPrice}</Price>
        </PriceStatistic>
        {/*  */}
        <PriceStatistic>
          <Title>shipping</Title>
          <Price>$ 50</Price>
        </PriceStatistic>
        <PriceStatistic>
          <Title>grand total</Title>
          <GrandTotalPrice>$ {totalPrice + 50}</GrandTotalPrice>
        </PriceStatistic>
      </PriceContainer>
      {/* submit */}
      <SubmitButton type="submit">continue & pay</SubmitButton>
    </Container>
  );
}

export default Summary;

const Container = styled.div`
  max-width: 730px;
  width: 100%;
  margin: auto;
  background-color: var(--white);
  border-radius: 8px;
  padding: 32px 24px;
  @media screen and (min-width: 768px) {
    padding: 32px 33px;
  }
  @media screen and (min-width: 1110px) {
    width: 350px;
    margin: 0;
  }
`;

const SummaryTitle = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 1.28571px;
  text-transform: uppercase;
  color: var(--primary-black);
`;

const SummaryList = styled.ul`
  margin-top: 31px;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;

// money counter

const PriceContainer = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

const PriceStatistic = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h4`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  color: var(--primary-black);
  mix-blend-mode: normal;
  opacity: 0.5;
  text-transform: uppercase;
`;
const Price = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  text-align: right;
  text-transform: uppercase;
  color: var(--primary-black);
`;

const GrandTotalPrice = styled(Price)`
  color: var(--primary-orange);
`;

const SubmitButton = styled.button`
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
  border: none;
  background-color: var(--primary-orange);
  margin-top: 32px;
  cursor: pointer;
  transition-duration: 0.2s;

  &:hover {
    background-color: var(--secondary-orange);
  }
`;
