import styled from "styled-components";

export const PortfolioSectionWrapper = styled.section`
  padding: 3rem 3.2rem;
  display: grid;
  place-items: center;
  row-gap: 2.4rem;

  @media screen and (min-width: 62em) {
    grid-template-columns: repeat(3, 1fr);
    padding: 3rem 4rem;
    row-gap: 4rem;
  }

  @media screen and (min-width: 71em) {
    padding: 3rem 7.5rem;
  }

  @media screen and (min-width: 90em) {
    padding: 3rem 10rem;
    max-width: 150rem;
    margin: 0 auto;
  }
`;

export const PortfolioElementWrapper = styled.div`
  position: relative;
`;

export const PortfolioImage = styled.picture`
  filter: brightness(0.8);

  @media screen and (min-width: 62em) {
    height: 44rem;
    width: 28rem;
  }

  @media screen and (min-width: 71em) {
    height: 50rem;
    width: 32rem;
  }

  @media screen and (min-width: 90em) {
    height: 56rem;
    width: 35.1rem;
  }
`;

export const TextBox = styled.div`
  position: absolute;
  color: #fff;

  bottom: 2rem;
  left: 2rem;
`;

export const PortfolioElTitle = styled.p`
  font-size: 3.2rem;
  font-weight: 700;
  line-height: 4rem;
`;

export const PortfolioElDate = styled.span`
  font-weight: 500;
  line-height: 2.4rem;
`;
