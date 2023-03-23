import styled from "styled-components";

interface FeaturesProps {
  features: string;
  includes: {
    quantity: number;
    item: string;
  }[];
}

// import component

import { QuantityItem } from "../../components";

function Features({ features, includes }: FeaturesProps) {
  const featuresText = features;

  return (
    <Container>
      <FeaturesBox>
        <FeatureTitle>features</FeatureTitle>
        {featuresText.split("\n\n").map((p, i) => (
          <FeaturesDescription key={i}>{p}</FeaturesDescription>
        ))}
      </FeaturesBox>
      {/*  */}
      <QuantityBox>
        <QuantityTitle>in the box</QuantityTitle>
        <QuantityList>
          {includes.map((include, index) => {
            return <QuantityItem key={index} include={include} />;
          })}
        </QuantityList>
      </QuantityBox>
    </Container>
  );
}

export default Features;

const Container = styled.div`
  margin-top: 88px;
  @media screen and (min-width: 768px) {
    margin-top: 120px;
  }
  @media screen and (min-width: 1110px) {
    margin-top: 160px;
    display: flex;
    column-gap: 125px;
  }
`;

const FeaturesBox = styled.div`
  @media screen and (min-width: 1110px) {
    max-width: 635px;
  }
`;

const FeatureTitle = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: 0.857143px;
  text-transform: uppercase;
  color: var(--primary-black);
  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 36px;
    letter-spacing: 1.14286px;
    width: 339px;
  }
`;

const FeaturesDescription = styled.p`
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

// quantity box
const QuantityBox = styled.div`
  margin-top: 88px;
  @media screen and (min-width: 768px) {
    display: flex;
    margin-top: 120px;
  }
  @media screen and (min-width: 1110px) {
    flex-direction: column;
  }
  @media screen and (min-width: 1110px) {
    margin-top: 0px;
  }
`;

const QuantityTitle = styled(FeatureTitle)``;

const QuantityList = styled.ul`
  margin-top: 24px;
  @media screen and (min-width: 768px) {
    margin-top: 0px;
  }
  @media screen and (min-width: 1110px) {
    margin-top: 32px;
  }
`;
