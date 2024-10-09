import styled from "styled-components";

export const FooterBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #eeeff4;
  margin-top: 6rem;
  padding-bottom: 5rem;

  @media screen and (min-width: 50em) {
    flex-direction: row;
    margin-top: 0;
    padding-bottom: 0;
    width: 90%;
  }

  @media screen and (min-width: 62em) {
    margin: 0 6rem;
    width: 85%;
  }

  @media screen and (min-width: 82em) {
    margin: 0 9rem;
    width: 80%;
  }
`;

export const LogoWrapper = styled.div`
  background-color: #000;
  width: 12rem;
  height: 11rem;
  display: grid;
  place-content: center;
  margin-top: -5rem;
  z-index: 10;

  @media screen and (min-width: 50em) {
    margin-top: 0rem;
  }

  @media screen and (min-width: 62em) {
    width: 14rem;
    height: 13rem;
  }
`;

export const FooterLinksBox = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0;
  gap: 2rem;

  @media screen and (min-width: 50em) {
    flex-direction: row;
    gap: 4rem;
    width: auto;
    position: relative;
    padding: 2rem 9rem;
  }

  @media screen and (min-width: 62em) {
    gap: 6rem;
  }

  @media screen and (min-width: 55em) {
    padding: 2rem 14rem;
  }

  @media screen and (min-width: 62em) {
    padding: 2rem 12rem;
  }
`;

export const FooterLink = styled.li`
  a {
    color: #7d828f;
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 2.5rem;
  }
`;

export const ButtonWrapper = styled.div`
  @media screen and (min-width: 50em) {
    position: absolute;
    right: 0;
  }

  @media screen and (min-width: 62em) {
    right: 3.8rem;
  }

  @media screen and (min-width: 72em) {
    right: 5rem;
  }

  @media screen and (min-width: 82em) {
    right: 10rem;
  }
`;
