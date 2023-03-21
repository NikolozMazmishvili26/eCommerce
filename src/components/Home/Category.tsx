import styled from "styled-components";
import { Link } from "react-router-dom";

// import assets
import { rightArrow } from "../../assets";

interface CategoryProps {
  image: string;
  title: string;
}

function Category({ image, title }: CategoryProps) {
  return (
    <CardLink to={`/category/${title}`}>
      <Card>
        <CategoryImage src={image} />
        <Title>{title}</Title>
        <ButtonContainer>
          <ShopButton>shop</ShopButton>
          <ArrowImage src={rightArrow} alt="arrow" />
        </ButtonContainer>
      </Card>
    </CardLink>
  );
}

export default Category;

const CardLink = styled(Link)`
  width: 100%;
`;

const Card = styled.div`
  position: relative;
  width: 100%;
  background-color: var(--primary-grey);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 88px 0px 22px 0px;
  border-radius: 8px;
  @media screen and (min-width: 1110px) {
    width: 350px;
    padding: 116px 0px 30px 0px;
  }
`;

const CategoryImage = styled.img`
  position: absolute;
  height: 140px;
  bottom: 85px;
  @media screen and (min-width: 1110px) {
    height: 180px;
    bottom: 95px;
  }
`;

const Title = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 1.07143px;
  text-transform: uppercase;
  color: var(--primary-black);
  @media screen and (min-width: 1110px) {
    font-size: 18px;
    line-height: 25px;
  }
`;

const ShopButton = styled.button`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--primary-black);
  mix-blend-mode: normal;
  opacity: 0.5;
  border: none;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 14px;
  margin-top: 17px;
  transition-duration: 0.2s;

  &:hover {
    ${ShopButton} {
      cursor: pointer;
      color: var(--primary-orange);
    }
  }
`;

const ArrowImage = styled.img``;
