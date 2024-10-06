import styled from "styled-components";

export const HeroWrapper = styled.div`
  position: relative;

  @media screen and (min-width: 72rem) {
    padding: 0 8rem;
  }
`;

export const MainPageImgWrapper = styled.picture`
  filter: brightness(0.7);

  img {
    width: 100%;
    object-fit: cover;
    height: 52rem;
  }

  @media screen and (min-width: 35rem) {
    img {
      height: 68rem;
    }
  }

  @media screen and (min-width: 50rem) {
    img {
      height: 74rem;
    }
  }
`;

export const HeroContentBox = styled.div`
  position: absolute;
  top: 10rem;
  left: 2rem;
  color: #fff;

  @media screen and (min-width: 28.5rem) {
    left: 4rem;
    top: 16rem;
  }

  @media screen and (min-width: 43rem) {
    left: 6rem;
    top: 20rem;
  }

  @media screen and (min-width: 72rem) {
    left: 16rem;
    top: 18rem;
  }

  @media screen and (min-width: 90rem) {
    left: 20rem;
    top: 18rem;
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

  @media screen and (min-width: 35rem) {
    font-size: 6.8rem;
    line-height: 7.2rem;
  }

  @media screen and (min-width: 60rem) {
    font-size: 8rem;
    line-height: 7.6rem;
    margin-bottom: 1.6rem;
  }

  @media screen and (min-width: 72rem) {
    font-size: 9.4rem;
    line-height: 8rem;
  }
`;

export const HeroText = styled.p`
  font-weight: 500;
  line-height: 2.4rem;
  margin-bottom: 8.3rem;
  padding-right: 2.6rem;

  @media screen and (min-width: 28.5rem) {
    padding-right: 4rem;
    margin-bottom: 9rem;
  }

  @media screen and (min-width: 35rem) {
    padding-right: 0rem;
    max-width: 48.9rem;
  }
`;

////////////////// WELCOME SECTION //////////////////////

export const WelcomeWrapper = styled.div`
  padding: 4rem 3.2rem;
`;

export const MobileMiniBorder = styled.span`
  border-bottom: 5px solid #c8ccd8;
  width: 100%;
  /* height: 5px;
  width: 6.5rem; */
`;

export const WelcomeSpan = styled.span`
  display: none;

  @media screen and (min-width: 50rem) {
    display: block;
    color: #eeeff4;
    font-size: 12rem;
    font-weight: 700;
    line-height: 20rem;
    letter-spacing: -3px;
  }

  @media screen and (min-width: 72rem) {
    font-size: 20rem;
    letter-spacing: -5px;
  }

  @media screen and (min-width: 82rem) {
    font-size: 22rem;
    letter-spacing: -5px;
  }

  @media screen and (min-width: 90rem) {
    font-size: 24rem;
    letter-spacing: -5px;
  }
`;

export const WelcomeHeading = styled.h1``;

export const WelcomeText = styled.p``;
