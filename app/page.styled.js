import styled from "styled-components";

export const HeroWrapper = styled.div`
  position: relative;
`;

export const MainPageImgWrapper = styled.picture`
  filter: brightness(0.7);
`;

export const HeroContentBox = styled.div`
  position: absolute;
  top: 7rem;
  left: 2rem;
  color: #fff;

  @media screen and (min-width: 28.5rem) {
    left: 4rem;
    top: 16rem;
  }
`;

export const HeroHeading = styled.h1`
  font-size: 4.8rem;
  font-weight: 700;
  line-height: 4.8rem;
  letter-spacing: -1.2px;
  margin-bottom: 1.1rem;

  @media screen and (min-width: 28.5rem) {
    font-size: 5.4rem;
    margin-bottom: 1.4rem;
  }
`;

export const HeroText = styled.p`
  font-weight: 500;
  line-height: 2.4rem;
  margin-bottom: 8.3rem;
  padding-right: 2rem;

  @media screen and (min-width: 28.5rem) {
    padding-right: 4rem;
    margin-bottom: 9rem;
  }
`;
