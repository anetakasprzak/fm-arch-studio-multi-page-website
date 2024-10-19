import styled from "styled-components";

export const AboutHeroWrapper = styled.div`
  display: grid;
  place-items: center;

  @media screen and (min-width: 62em) {
    place-items: start;
    padding: 0 7rem;
  }

  @media screen and (min-width: 90em) {
    padding: 0 12rem;
  }
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
    padding: 8.2rem 5rem 3rem 7rem;
  }

  @media screen and (min-width: 43em) {
    padding: 8.2rem 8rem 3rem 7rem;
    margin-top: -40rem;
  }

  @media screen and (min-width: 50em) {
    padding: 8.2rem 14rem 1rem 7rem;
  }

  @media screen and (min-width: 55em) {
    padding: 8.2rem 16rem 1rem 7rem;
    max-width: 74%;
  }

  @media screen and (min-width: 62em) {
    padding: 12rem 0rem 1rem 12rem;
    place-self: end;
    max-width: 80%;
  }

  @media screen and (min-width: 72em) {
    max-width: 70%;
  }

  @media screen and (min-width: 82em) {
    padding: 12rem 0rem 1rem 12rem;
    max-width: 60%;
  }

  @media screen and (min-width: 90em) {
    padding: 12rem 3rem 1rem 18rem;
    max-width: 70%;
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

  @media screen and (min-width: 62em) {
    font-size: 20rem;
    top: -14rem;
  }

  @media screen and (min-width: 82em) {
    left: 0;
  }

  @media screen and (min-width: 90em) {
    left: 6rem;
    top: -16rem;
    font-size: 25rem;
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

  @media screen and (min-width: 43em) {
    font-size: 6.4rem;
    margin-bottom: 5rem;
  }

  @media screen and (min-width: 50em) {
    margin-bottom: 6rem;
  }

  @media screen and (min-width: 62em) {
    font-size: 7.2rem;
    line-height: 7rem;
    margin-bottom: 5rem;
  }

  @media screen and (min-width: 90em) {
    font-size: 7.4rem;
  }
`;

export const HeroAboutText = styled.p`
  color: #60636d;
  line-height: 2.4rem;
`;

///////////////// OUR HERITAGE ///////////////////

export const HeritageSection = styled.section`
  margin-top: 5rem;
  padding: 0 3rem;

  @media screen and (min-width: 23.5em) {
    padding: 0 5rem;
  }

  @media screen and (min-width: 28.5em) {
    padding: 0 9rem;
  }

  @media screen and (min-width: 90em) {
    padding: 8rem 12rem;
  }
`;

export const HeritageHeading = styled.h2`
  color: #1b1d23;
  font-size: 3.2rem;
  line-height: 4rem;
  margin-bottom: 2rem;

  @media screen and (min-width: 28.5em) {
    font-size: 3.6rem;
  }
`;

export const HeritageText = styled.p`
  color: #60636d;
  line-height: 2.4rem;
`;

///////////////// THE LEADERS ///////////////////

export const LeadersSection = styled.section`
  padding: 8rem 3rem;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 23.5em) {
    padding: 8rem 5rem;
  }

  @media screen and (min-width: 62em) {
    flex-direction: row;
    gap: 10rem;
    margin-top: 4rem;
  }

  @media screen and (min-width: 72em) {
    gap: 14rem;
    margin-bottom: 4rem;
  }

  @media screen and (min-width: 90em) {
    padding: 8rem 12rem;
  }
`;

export const LeadersHeading = styled.h2`
  margin-bottom: 3rem;
  font-size: 3.2rem;
  line-height: 4rem;
  margin-bottom: 3rem;

  @media screen and (min-width: 28.5em) {
    font-size: 3.6rem;
    margin-bottom: 4rem;
    margin-left: 4rem;
  }

  @media screen and (min-width: 90em) {
    margin-left: 0;
  }
`;

export const LeadersWrapper = styled.div`
  display: grid;
  place-items: center;
  row-gap: 3rem;

  @media screen and (min-width: 35em) {
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
  }

  @media screen and (min-width: 62em) {
    column-gap: 4rem;
  }

  @media screen and (min-width: 72em) {
    grid-template-columns: 1fr 1fr;
    column-gap: 9rem;
  }
`;

export const LeaderImgWrapper = styled.div`
  width: 25rem;
  height: 22.8rem;

  @media screen and (min-width: 28.5em) {
    width: 31.1rem;
    height: 28.4rem;
  }

  @media screen and (min-width: 35em) {
    width: 24rem;
    height: 22.8rem;
  }

  @media screen and (min-width: 43em) {
    width: 31.1rem;
    height: 28.4rem;
  }
`;

export const LeaderElementWrapper = styled.div``;

export const TextBox = styled.div`
  color: #1b1d23;
`;

export const LeaderName = styled.h4`
  font-size: 2.8rem;
  font-weight: 700;
  line-height: 4rem;

  @media screen and (min-width: 28.5em) {
    font-size: 3.2rem;
  }

  @media screen and (min-width: 35em) {
    font-size: 2.8rem;
  }
`;

export const LeaderJob = styled.span`
  font-size: 1.8rem;
  line-height: 2rem;
  opacity: 0.75;
`;
