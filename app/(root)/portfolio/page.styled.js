import styled from "styled-components";

export const PortfolioSectionWrapper = styled.section`
  padding: 3rem 3.2rem;
  display: grid;
  row-gap: 2.4rem;
`;

export const PortfolioElementWrapper = styled.div`
  position: relative;
`;

export const PortfolioImage = styled.picture`
  filter: brightness(0.8);

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
