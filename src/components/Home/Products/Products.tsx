import styled from "styled-components";

// import components
import { Zx9Speaker, Zx7Speaker, Yx1Earphones } from "../../../components";

function Products() {
  return (
    <ProductsContainer>
      <Zx9Speaker />
      <Zx7Speaker />
      <Yx1Earphones />
    </ProductsContainer>
  );
}

export default Products;

const ProductsContainer = styled.div`
  max-width: 1110px;
  width: 100%;
  margin: auto;
  padding: 0 24px 120px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 24px;

  @media screen and (min-width: 768px) {
    padding: 0px 40px 96px 40px;
    row-gap: 32px;
  }

  @media screen and (min-width: 1110px) {
    padding: 0px 0px 200px 0px;
    row-gap: 48px;
  }
`;
