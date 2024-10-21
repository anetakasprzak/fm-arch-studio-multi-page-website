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
    top: 10rem;
  }

  @media screen and (min-width: 35rem) {
    left: 6rem;
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

  @media screen and (min-width: 28.5rem) {
    padding: 5rem 4rem;
  }

  @media screen and (min-width: 35rem) {
    padding: 5rem 7rem;
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 4rem;
`;

export const Element = styled.div`
  background-color: #e1e1e1;
  display: none;

  @media screen and (min-width: 70rem) {
    display: block;
    flex: 1 0 50%;
  }
`;

export const WelcomeSpan = styled.span`
  display: none;

  @media screen and (min-width: 50rem) {
    display: block;
    color: #eeeff4;
    font-size: 14rem;
    font-weight: 700;
    letter-spacing: -3px;
    margin-bottom: -2rem;
  }

  @media screen and (min-width: 60rem) {
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

export const WelcomeHeading = styled.h1`
  color: #1b1d23;
  font-size: 4rem;
  font-weight: 700;
  line-height: 4rem;
  letter-spacing: -1.714px;
  margin-bottom: 2rem;

  @media screen and (min-width: 28.5rem) {
    font-size: 4.8rem;
    line-height: 4.8rem;
  }

  @media screen and (min-width: 43rem) {
    font-size: 5.8rem;
    line-height: 6rem;
  }

  @media screen and (min-width: 50rem) {
    font-size: 6.4rem;
    line-height: 6.8rem;
  }

  @media screen and (min-width: 60rem) {
    margin-left: 10rem;
    margin-bottom: 3rem;
  }

  @media screen and (min-width: 72rem) {
    margin-left: 12rem;
    margin-bottom: 4rem;
  }

  @media screen and (min-width: 82rem) {
    margin-left: 14rem;
  }

  @media screen and (min-width: 90rem) {
    font-size: 7.2rem;
  }
`;

export const WelcomeText = styled.p`
  color: #60636d;
  font-weight: 500;
  line-height: 2.4rem;

  @media screen and (min-width: 43rem) {
    max-width: 62rem;
  }

  @media screen and (min-width: 60rem) {
    max-width: 42rem;
    margin-left: 10rem;
  }

  @media screen and (min-width: 72rem) {
    margin-left: 12rem;
  }

  @media screen and (min-width: 82rem) {
    max-width: 52rem;
    margin-left: 14rem;
  }
`;

////////////////// ABOUT US SECTION //////////////////////

export const AboutUsWrapper = styled.div`
  background-color: #60636d;
  padding: 16.5rem 3rem;
  border-radius: 1.6rem;

  @media screen and (min-width: 28.5rem) {
    margin: 0 4rem;
    margin-top: 3rem;
    padding: 12rem 5rem;
  }

  @media screen and (min-width: 43rem) {
    margin: 0 6rem;
    margin-top: 6rem;
    padding: 14rem 7rem;
  }

  @media screen and (min-width: 60rem) {
    padding: 16rem 10rem;
  }

  @media screen and (min-width: 90rem) {
    margin: 0 8rem;
    margin-top: 10rem;
  }
`;

export const HeadingAboutUs = styled.h1`
  color: #fff;
  margin-bottom: 2.2rem;
  font-size: 4rem;
  line-height: 5rem;
  letter-spacing: -1.714px;

  @media screen and (min-width: 28.5rem) {
    font-size: 4.8rem;
  }

  @media screen and (min-width: 35rem) {
    font-size: 5.4rem;
    line-height: 6rem;
    margin-bottom: 4rem;
  }

  @media screen and (min-width: 60rem) {
    font-size: 7.2rem;
    line-height: 6.4rem;
    letter-spacing: -2px;
  }
`;

////////////////// FEATURED SECTION //////////////////////

export const FeaturedWrapper = styled.div`
  padding: 5rem 2rem;

  @media screen and (min-width: 35rem) {
    padding: 12rem 4rem;
  }

  @media screen and (min-width: 43rem) {
    padding: 14rem 7rem;
  }

  @media screen and (min-width: 82rem) {
    padding: 16rem 10rem;
  }
`;

export const FeaturedHeadingBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.8rem;

  @media screen and (min-width: 35rem) {
    margin-bottom: 4.8rem;
  }

  @media screen and (min-width: 62rem) {
    margin-bottom: 7rem;
  }
`;

export const FeaturedHeader = styled.h2`
  color: #1b1d23;
  font-size: 4rem;
  line-height: 5.2rem;
  letter-spacing: -1.714px;

  @media screen and (min-width: 35rem) {
    font-size: 4.4rem;
  }

  @media screen and (min-width: 62rem) {
    font-size: 6rem;
  }

  @media screen and (min-width: 72rem) {
    font-size: 7.2rem;
  }
`;

export const FeaturedImgsAndBtnBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media screen and (min-width: 35rem) {
    gap: 3.2rem;
  }

  @media screen and (min-width: 62rem) {
    flex-direction: row;
    justify-content: center;
  }

  @media screen and (min-width: 72rem) {
    gap: 4rem;
  }

  @media screen and (min-width: 82rem) {
    gap: 7rem;
  }
`;

export const DisplayButtonWrapperMobile = styled.div`
  @media screen and (min-width: 28.5rem) {
    display: none;
  }
`;

export const DisplayButtonWrapperTop = styled.div`
  display: none;

  @media screen and (min-width: 28.5rem) {
    display: block;
  }
`;
