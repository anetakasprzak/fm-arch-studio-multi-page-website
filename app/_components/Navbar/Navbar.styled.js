import styled from "styled-components";

export const NavBarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 2.2rem;

  position: relative;

  @media screen and (min-width: 35em) {
    justify-content: flex-start;
    /* gap: 7rem; */
  }
`;

export const HamburgerWrapper = styled.div`
  @media screen and (min-width: 35em) {
    display: none;
  }
`;

export const Menu = styled.ul`
  display: none;

  @media screen and (min-width: 35em) {
    display: flex;
    gap: 2rem;
    margin: 0 auto;

    a {
      color: #7d828f;
      font-weight: 700;
      line-height: 2.5rem;
    }
  }
`;

export const MenuLink = styled.li`
  cursor: pointer;
`;

export const MobileMenuWrapper = styled.div`
  @media screen and (min-width: 35em) {
    display: none;
  }
`;

export const MobileMenuLinks = styled.ul`
  background-color: #eeeff4;
  width: 90%;
  position: absolute;
  right: 0;
  z-index: 999;
  padding: 3.4rem 4rem;
  display: flex;
  flex-direction: column;
  gap: 1.7rem;

  @media screen and (min-width: 35em) {
    padding: 4rem 5rem;
  }
`;

export const MobileMenuLink = styled.li`
  color: #1b1d23;
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 4rem;
`;

export const Overlay = styled.div`
  position: absolute;
  opacity: 0.5;
  height: 100%;
  width: 100%;
  background-color: black;
  z-index: 1;
`;
