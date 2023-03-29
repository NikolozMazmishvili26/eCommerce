import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

// import data json
import data from "../../../data.json";

// import interface
import { cartItemsProps } from "../../App";

// import components

import {
  SingleProduct,
  Features,
  Gallery,
  Others,
  Categories,
  About,
} from "../../components";

interface DetailProps {
  setCartItems: React.Dispatch<React.SetStateAction<cartItemsProps[]>>;
  cartItems: cartItemsProps[];
}

function Detail({ cartItems, setCartItems }: DetailProps) {
  //
  const params = useParams();

  const uniqueProduct = data.filter((prod) => prod.slug === params.detailName);

  const {
    category,
    categoryImage,
    description,
    features,
    gallery,
    includes,
    name,
    others,
    price,
    slug,
  } = uniqueProduct[0];

  return (
    <>
      <DetailContainer>
        <Link to={`/category/${category}`}>
          <GoBackButton>Go Back</GoBackButton>
        </Link>
        {/* single product component */}
        <SingleProduct
          categoryImage={categoryImage}
          name={name}
          description={description}
          price={price}
          slug={slug}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
        {/* features component */}
        <Features features={features} includes={includes} />
        {/* gallery component */}
        <Gallery gallery={gallery} />
        {/* others component */}
        <Others others={others} />
      </DetailContainer>
      {/* categories Component */}
      <Categories />
      {/* about us component */}
      <About />
    </>
  );
}

export default Detail;

const DetailContainer = styled.div`
  max-width: 1110px;
  width: 100%;
  margin: auto;
  padding: 16px 24px 60px 24px;
  @media screen and (min-width: 768px) {
    padding: 33px 40px 0px 40px;
  }
  @media screen and (min-width: 1110px) {
    padding: 79px 0px 0px 0px;
  }
`;

const GoBackButton = styled.button`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  color: var(--primary-black);
  mix-blend-mode: normal;
  opacity: 0.5;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition-duration: 0.2s;

  &:hover {
    color: var(--primary-orange);
  }
`;
