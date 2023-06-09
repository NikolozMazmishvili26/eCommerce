import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../Button";

interface OtherProps {
  other: {
    slug: string;
    name: string;
    image: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  };
}

function Other({ other }: OtherProps) {
  //
  const { image, name, slug } = other;

  const images = {
    mobile: image.mobile,
    tablet: image.tablet,
    desktop: image.desktop,
  };

  return (
    <CardLink to={`/productDetail/${slug}`}>
      <Card>
        <BackgroundImage images={images} />
        <Title>{name}</Title>
        <Button
          title="see product"
          backgroundColor="var(--primary-orange)"
          border="none"
          color="var(--white)"
          hoverColor="var(--secondary-orange)"
        />
      </Card>
    </CardLink>
  );
}

export default Other;

const CardLink = styled(Link)`
  width: 100%;
`;

const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BackgroundImage = styled.div<{
  images: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
}>`
  background-image: url(${(props) => props.images.mobile});
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 120px;
  border-radius: 8px;
  @media screen and (min-width: 768px) {
    background-image: url(${(props) => props.images.tablet});
    height: 318px;
  }
  @media screen and (min-width: 1110px) {
    background-image: url(${(props) => props.images.desktop});
    width: 350px;
  }
`;

const Title = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  text-align: center;
  letter-spacing: 1.71429px;
  text-transform: uppercase;
  color: var(--primary-black);
  margin-top: 32px;
  margin-bottom: 32px;
  @media screen and (min-width: 1110px) {
    margin-top: 40px;
  }
`;
