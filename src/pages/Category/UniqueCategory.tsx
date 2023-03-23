import { useParams } from "react-router-dom";
import styled from "styled-components";
import data from "../../../data.json";

// import components
import { CategoryCard, Categories, About } from "../../components";

// interface

export interface ProductProps {
  id: number;
  slug: string;
  name: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  category: string;
  categoryImage: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: {
    quantity: number;
    item: string;
  }[];
  gallery: {
    first: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    second: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    third: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  };
  others: {
    slug: string;
    name: string;
    image: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }[];
}

function Category() {
  //
  const params = useParams();
  //

  const categoryProducts = data.filter(
    (product) => product.category === params.categoryId
  );

  return (
    <>
      <CategoryTitleBox>
        <Title>{params.categoryId}</Title>
      </CategoryTitleBox>
      <CategoryContainer>
        {categoryProducts.map((product) => {
          return <CategoryCard key={product.id} product={product} />;
        })}
      </CategoryContainer>
      {/* import categories component */}
      <Categories />
      {/* import about us component */}
      <About />
    </>
  );
}

export default Category;

const CategoryTitleBox = styled.div`
  padding: 32px 0px 32px 0px;
  background-color: var(--primary-black);
  @media screen and (min-width: 768px) {
    padding: 105px 0px 97px 0px;
  }
  @media screen and (min-width: 768px) {
    padding: 98px 0px 98px 0px;
  }
`;

const Title = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  text-align: center;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--white);
  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 44px;
  }
`;

const CategoryContainer = styled.div`
  max-width: 1110px;
  width: 100%;
  margin: auto;
  background-color: var(--white);
  padding: 64px 24px 120px 24px;
  display: flex;
  flex-direction: column;
  row-gap: 120px;
  @media screen and (min-width: 768px) {
    padding: 120px 40px 120px 40px;
  }
  @media screen and (min-width: 1110px) {
    padding: 160px 0px 160px 0px;
    row-gap: 160px;
  }
`;
