import styled from "styled-components";

export const NavBarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 2.2rem;

  position: relative;
`;

export const HamburgerWrapper = styled.div`
  @media screen and (min-width: 25em) {
    display: none;
  }
`;

export const MobileMenuWrapper = styled.div`
  @media screen and (min-width: 25em) {
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

  @media screen and (min-width: 25em) {
    padding: 4rem 5rem;
  }
`;

export const MenuLink = styled.li`
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
