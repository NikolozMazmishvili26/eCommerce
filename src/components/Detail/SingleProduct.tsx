import { useState, useEffect } from "react";
import styled from "styled-components";

// import interface
import { cartItemsProps } from "../../App";

// interface

interface SingleProductProps {
  categoryImage: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  name: string;
  description: string;
  price: number;
  slug: string;
  setCartItems: React.Dispatch<React.SetStateAction<cartItemsProps[]>>;
  cartItems: cartItemsProps[];
}

// import component

import { Counter } from "../../components";

function SingleProduct({
  categoryImage,
  description,
  name,
  price,
  slug,
  cartItems,
  setCartItems,
}: SingleProductProps) {
  //
  const [tabletImageUrl, setTabletImageUrl] = useState<string>("");
  const [desktopImageUrl, setDesktopImageUrl] = useState<string>("");
  const [mobileImageUrl, setMobileImageUrl] = useState<string>("");

  useEffect(() => {
    import(`../../${categoryImage.mobile}`) /* @vite-ignore */
      .then((module) => setMobileImageUrl(module.default))
      .catch((err) => console.error(err));

    import(`../../${categoryImage.tablet}`) /* @vite-ignore */
      .then((module) => setTabletImageUrl(module.default))
      .catch((err) => console.error(err));

    import(`../../${categoryImage.desktop}`) /* @vite-ignore */
      .then((module) => setDesktopImageUrl(module.default))
      .catch((err) => console.error(err));
  }, [slug]);

  const images = {
    mobile: mobileImageUrl,
    tablet: tabletImageUrl,
    desktop: desktopImageUrl,
  };

  return (
    <Product>
      <LeftSide>
        <ProductImage images={images} />
      </LeftSide>
      <RightSide>
        <Title>new product</Title>
        <ProductTitle>{name}</ProductTitle>
        <ProductDescription>{description}</ProductDescription>
        <Price>$ {price}</Price>
        {/* Counter Component */}
        <Counter
          cartItems={cartItems}
          setCartItems={setCartItems}
          categoryImage={categoryImage}
          name={name}
          price={price}
        />
      </RightSide>
    </Product>
  );
}

export default SingleProduct;

const Product = styled.div`
  margin-top: 24px;
  @media screen and (min-width: 768px) {
    display: flex;
    column-gap: 69px;
    align-items: center;
  }
  @media screen and (min-width: 1110px) {
    margin-top: 56px;
    column-gap: 125px;
  }
`;

const LeftSide = styled.div``;

const ProductImage = styled.div<{
  images: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
}>`
  background-image: url(${(props) => props.images.mobile});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 327px;
  border-radius: 8px;
  @media screen and (min-width: 768px) {
    width: 281px;
    height: 480px;
    background-image: url(${(props) => props.images.tablet});
  }
  @media screen and (min-width: 1110px) {
    width: 540px;
    height: 560px;
    background-image: url(${(props) => props.images.desktop});
  }
`;

// right side

const RightSide = styled.div`
  margin-top: 32px;
  @media screen and (min-width: 768px) {
    margin-top: 0px;
  }
`;

const Title = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 10px;
  text-transform: uppercase;
  color: var(--primary-orange);
  @media screen and (min-width: 768px) {
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 8.57143px;
  }
  @media screen and (min-width: 1110px) {
    font-size: 14px;
    line-height: 19px;
  }
`;

const ProductTitle = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--primary-black);
  margin-top: 24px;
  @media screen and (min-width: 768px) {
    margin-top: 17px;
    line-height: 32px;
  }
  @media screen and (min-width: 1110px) {
    font-size: 40px;
    line-height: 44px;
    margin-top: 16px;
  }
`;

const ProductDescription = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  color: var(--primary-black);
  mix-blend-mode: normal;
  opacity: 0.5;
  margin-top: 24px;
  @media screen and (min-width: 768px) {
    margin-top: 32px;
  }
`;

const Price = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 1.28571px;
  text-transform: uppercase;
  color: var(--primary-black);
  margin-top: 24px;
  @media screen and (min-width: 768px) {
    margin-top: 32px;
  }
`;
