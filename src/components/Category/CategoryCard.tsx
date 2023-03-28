import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

//
import { ProductProps } from "../../pages/Category/UniqueCategory";
import { Button } from "../Button";

interface CategoryCardProps {
  product: ProductProps;
}

function CategoryCard({ product }: CategoryCardProps) {
  //
  const [tabletImageUrl, setTabletImageUrl] = useState<string>("");
  const [desktopImageUrl, setDesktopImageUrl] = useState<string>("");
  const [mobileImageUrl, setMobileImageUrl] = useState<string>("");

  useEffect(() => {
    const loadImages = async () => {
      try {
        const { default: mobileImage } = await import(
          `../../${product.image.mobile}`
        );
        setMobileImageUrl(mobileImage);

        const { default: tabletImage } = await import(
          `../../${product.image.tablet}`
        );
        setTabletImageUrl(tabletImage);

        const { default: desktopImage } = await import(
          `../../${product.image.desktop}`
        );
        setDesktopImageUrl(desktopImage);
      } catch (error) {
        console.error(error);
      }
    };

    loadImages();
  }, [product]);

  //
  const images = {
    mobile: mobileImageUrl,
    tablet: tabletImageUrl,
    desktop: desktopImageUrl,
  };

  return (
    <Card>
      <ImageContainer id={String(product.id)}>
        <ImageBox images={images}></ImageBox>
      </ImageContainer>
      <DescriptionBox>
        <Title>new product</Title>
        <ProductName>{product.name}</ProductName>
        <Description>{product.description}</Description>
        <Link to={`/productDetail/${product.slug}`}>
          <Button
            title="see product"
            backgroundColor="var(--primary-orange)"
            border="none"
            color="var(--white)"
            hoverColor="var(--secondary-orange)"
          />
        </Link>
      </DescriptionBox>
    </Card>
  );
}

export default CategoryCard;

const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 1110px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const ImageContainer = styled.div<{ id?: string }>`
  width: 100%;
  position: relative;
  background-color: var(--primary-grey);
  height: 352px;
  border-radius: 8px;

  @media screen and (min-width: 1110px) {
    width: 540px;
    height: 560px;
    order: ${(props) => (props.id === "3" || props.id === "6" ? 2 : 0)};
  }
`;

const ImageBox = styled.div<{
  images: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
}>`
  border-radius: 8px;
  background-image: url(${(props) => props.images.mobile});
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    background-image: url(${(props) => props.images.tablet});
    background-size: 45%;
    background-repeat: no-repeat;
  }
  @media screen and (min-width: 1110px) {
    background-image: url(${(props) => props.images.desktop});
    background-size: cover;
  }
`;

const DescriptionBox = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    margin-top: 52px;
  }
  @media screen and (min-width: 1110px) {
    align-items: flex-start;
    margin-top: 0px;
    max-width: 445px;
  }
`;

const Title = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 10px;
  text-transform: uppercase;
  color: var(--primary-orange);
  @media screen and (min-width: 1110px) {
    text-align: start;
  }
`;

const ProductName = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--primary-black);
  min-width: 200px;
  margin-top: 24px;
  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 44px;
    width: 300px;
    margin-top: 16px;
  }
  @media screen and (min-width: 1110px) {
    text-align: start;
  }
`;

const Description = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  color: var(--primary-black);
  mix-blend-mode: normal;
  opacity: 0.5;
  margin-top: 24px;
  margin-bottom: 24px;
  @media screen and (min-width: 768px) {
    margin-top: 32px;
    max-width: 572px;
  }
  @media screen and (min-width: 1110px) {
    text-align: start;
    margin-bottom: 40px;
  }
`;
