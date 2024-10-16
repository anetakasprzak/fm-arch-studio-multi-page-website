import styled from "styled-components";

export const ContactHeroWrapper = styled.div``;

export const ContactHeroImageWrapper = styled.picture`
  filter: brightness(0.6);
`;

export const HeroTextBox = styled.div`
  position: relative;
`;

export const ContactSpan = styled.span`
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

export const HeroHeading = styled.h2``;

export const HeroContactText = styled.p``;
