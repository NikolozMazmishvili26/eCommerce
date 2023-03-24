import styled from "styled-components";

interface OthersProps {
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

// import component

import { Other } from "../../components";

function Others({ others }: OthersProps) {
  return (
    <Container>
      <Title>you may also like</Title>
      <Wrapper>
        {others.map((other) => {
          return <Other key={other.name} other={other} />;
        })}
      </Wrapper>
    </Container>
  );
}

export default Others;

const Container = styled.div`
  margin-top: 120px;
  @media screen and (min-width: 1110px) {
    margin-top: 160px;
  }
`;

const Title = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  letter-spacing: 0.857143px;
  text-transform: uppercase;
  color: var(--primary-black);
  @media screen and (min-width: 1110px) {
    font-size: 32px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 56px;
  margin-top: 40px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    row-gap: 0px;
    column-gap: 11px;
    margin-top: 56px;
  }
  @media screen and (min-width: 1110px) {
    justify-content: space-between;
    /* column-gap: 30px; */
    margin-top: 64px;
  }
`;
