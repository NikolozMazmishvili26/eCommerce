import styled from "styled-components";

function QuantityItem({
  include,
}: {
  include: {
    quantity: number;
    item: string;
  };
}) {
  return (
    <Wrapper>
      <Item>
        <Quantity>{include.quantity}x</Quantity>
        <Value>{include.item}</Value>
      </Item>
    </Wrapper>
  );
}

export default QuantityItem;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  column-gap: 24px;
`;

const Quantity = styled.h4`
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 25px;
  color: var(--primary-orange);
`;

const Value = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  color: var(--primary-black);
  mix-blend-mode: normal;
  opacity: 0.5;
`;
