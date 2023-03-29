import styled from "styled-components";

interface GalleryProps {
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
}

function Gallery({ gallery }: GalleryProps) {
  return (
    <GalleryContainer>
      <LeftSide>
        <FirstImage firstImages={gallery.first} />
        <SecondImage secondImages={gallery.second} />
      </LeftSide>
      <RightSide>
        <ThirdImage thirdImages={gallery.third} />
      </RightSide>
    </GalleryContainer>
  );
}

export default Gallery;

const GalleryContainer = styled.div`
  margin-top: 88px;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 20px;
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 18px;
    margin-top: 120px;
  }
  @media screen and (min-width: 1110px) {
    margin-top: 160px;
  }
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  @media screen and (min-width: 1110px) {
    row-gap: 32px;
  }
`;

const RightSide = styled.div``;

const FirstImage = styled.div<{
  firstImages: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
}>`
  background-image: url(${(props) => props.firstImages.mobile});
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 174px;
  border-radius: 8px;
  @media screen and (min-width: 768px) {
    background-image: url(${(props) => props.firstImages.tablet});
  }
  @media screen and (min-width: 1110px) {
    background-image: url(${(props) => props.firstImages.desktop});
    height: 280px;
  }
`;

const SecondImage = styled.div<{
  secondImages: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
}>`
  background-image: url(${(props) => props.secondImages.mobile});
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 174px;
  border-radius: 8px;
  @media screen and (min-width: 768px) {
    background-image: url(${(props) => props.secondImages.tablet});
  }
  @media screen and (min-width: 1110px) {
    background-image: url(${(props) => props.secondImages.desktop});
    height: 280px;
  }
`;

const ThirdImage = styled.div<{
  thirdImages: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
}>`
  background-image: url(${(props) => props.thirdImages.mobile});
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 368px;
  border-radius: 8px;
  @media screen and (min-width: 768px) {
    background-image: url(${(props) => props.thirdImages.tablet});
  }
  @media screen and (min-width: 1110px) {
    background-image: url(${(props) => props.thirdImages.desktop});
    height: 592px;
  }
`;
