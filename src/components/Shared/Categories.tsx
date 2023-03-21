import styled from "styled-components";

// import assets
import { headphones, earphones, speakers } from "../../assets";

// import components
import { Category } from "..";

function Categories() {
  return (
    <CategoriesComponent>
      <Category image={headphones} title="headphones" />
      <Category image={speakers} title="speakers" />
      <Category image={earphones} title="earphones" />
    </CategoriesComponent>
  );
}

export default Categories;

const CategoriesComponent = styled.div`
  width: 100%;
  padding: 92px 24px 120px 24px;
  display: flex;
  flex-direction: column;
  row-gap: 68px;
  max-width: 1110px;
  width: 100%;
  margin: auto;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    column-gap: 10px;
    padding: 148px 40px 96px 40px;
  }
  @media screen and (min-width: 1110px) {
    padding: 200px 0px 168px 0px;
  }
`;
