import styled from "styled-components";

// import assets
import { zx9Speaker } from "../../../assets";

// import component
import { Button } from "../../Button";

function Zx9Speaker() {
  return (
    <Container>
      <LeftSide>
        <Image src={zx9Speaker} alt="speaker" />
      </LeftSide>
      <RightSide>
        <Title>
          ZX9 <br></br> SPEAKER
        </Title>
        <Description>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </Description>
        <Button
          title="see product"
          backgroundColor="var(--primary-black)"
          border="none"
          color="var(--white)"
          hoverColor="#4C4C4C"
        />
      </RightSide>
      {/* circles */}
      <MainCircle>
        <ParentCircle>
          <ChildCircle />
        </ParentCircle>
      </MainCircle>
    </Container>
  );
}

export default Zx9Speaker;

const Container = styled.div`
  position: relative;
  width: 100%;
  background-color: var(--primary-orange);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 55px 24px;
  border-radius: 8px;
  overflow: hidden;
  z-index: 2;

  @media screen and (min-width: 768px) {
    padding: 52px 0px 64px 0px;
  }

  @media screen and (min-width: 1110px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 96px 95px 0px 114px;
    column-gap: 139px;
  }
`;

// left side

const LeftSide = styled.div``;

const Image = styled.img`
  height: 207px;
  @media screen and (min-width: 768px) {
    height: 237px;
  }
  @media screen and (min-width: 1110px) {
    height: 493px;
    margin-bottom: -15px;
  }
`;

// right side

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 1110px) {
    max-width: 349px;
    align-items: flex-start;
  }
`;

const Title = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 40px;
  text-align: center;
  letter-spacing: 1.28571px;
  text-transform: uppercase;
  color: var(--white);
  margin-top: 32px;
  @media screen and (min-width: 768px) {
    font-size: 56px;
    line-height: 58px;
    letter-spacing: 2px;
    margin-top: 64px;
  }
  @media screen and (min-width: 1110px) {
    text-align: start;
    margin-top: 0px;
  }
`;

const Description = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  color: var(--white);
  mix-blend-mode: normal;
  opacity: 0.75;
  margin-top: 24px;
  margin-bottom: 24px;
  @media screen and (min-width: 768px) {
    max-width: 349px;
    width: 100%;
    margin-bottom: 40px;
  }
  @media screen and (min-width: 1110px) {
    text-align: start;
  }
`;

// circle styles

const MainCircle = styled.div`
  position: absolute;
  width: 558px;
  height: 558px;
  border-radius: 50%;
  border: 1px solid var(--white);
  opacity: 0.2;
  bottom: 163px;
  z-index: 999;
  @media screen and (min-width: 768px) {
    width: 944px;
    height: 944px;
    bottom: 64px;
  }
  @media screen and (min-width: 1110px) {
    top: -70px;
    right: 315px;
    z-index: -1;
  }
`;

const ParentCircle = styled.div`
  position: absolute;
  width: 320px;
  height: 320px;
  border-radius: 50%;
  border: 1px solid var(--white);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  @media screen and (min-width: 768px) {
    width: 542px;
    height: 542px;
  }
`;

const ChildCircle = styled.div`
  position: absolute;
  width: 279px;
  height: 279px;
  border-radius: 50%;
  border: 1px solid var(--white);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media screen and (min-width: 768px) {
    width: 472px;
    height: 472px;
  }
`;
