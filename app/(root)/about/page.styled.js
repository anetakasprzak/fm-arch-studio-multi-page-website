import styled from "styled-components";

export const AboutHeroWrapper = styled.div`
  display: grid;
  place-items: center;
`;

export const AboutHeroImageWrapper = styled.picture`
  filter: brightness(0.6);
`;

export const HeroTextBox = styled.div`
  background-color: #fff;
  padding: 4rem 2rem 1rem 3rem;
  margin-top: -4rem;
  z-index: 10;
  max-width: 90%;
  place-self: start;

  @media screen and (min-width: 23.4em) {
    padding: 4rem 2rem 3rem 5rem;
    max-width: 85%;
  }

  @media screen and (min-width: 28.5em) {
    padding: 4rem 3rem 3rem 9rem;
    max-width: 78%;
  }

  @media screen and (min-width: 35em) {
    place-self: end;
    margin-top: -35rem;
    position: relative;
    padding: 8.2rem 5rem 3rem 9rem;
  }
`;

export const AboutSpan = styled.span`
  display: none;

  @media screen and (min-width: 35em) {
    display: block;
    color: #eeeff4;
    font-size: 12rem;
    font-weight: 700;
    letter-spacing: -3px;

    position: absolute;
    top: -7rem;
  }
`;

export const HeroHeading = styled.h2`
  color: #1b1d23;
  font-size: 3.2rem;
  line-height: 4rem;
  margin-bottom: 2rem;

  @media screen and (min-width: 28.5em) {
    font-size: 3.6rem;
  }

  @media screen and (min-width: 35em) {
    font-size: 5rem;
    line-height: 5.2rem;
  }
`;

export const HeroAboutText = styled.p`
  color: #60636d;
  line-height: 2.4rem;
`;
