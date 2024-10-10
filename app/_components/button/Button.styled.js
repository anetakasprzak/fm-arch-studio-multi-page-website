import styled from "styled-components";

export const ButtonBox = styled.button`
  display: flex;
  align-items: center;
  color: #fff;
  background-color: #1b1d23;
  padding: 2rem;
  border: none;
  font-size: 1.6rem;
  font-weight: 700;
  gap: 2rem;
  cursor: pointer;
  transition: all 0.3s;

  @media screen and (min-width: 28.5em) {
    padding: 2.5rem;
    font-size: 1.8rem;
    gap: 2.4rem;
  }

  &:hover {
    background-color: #7d828f;
  }

  @media screen and (min-width: 43em) {
    padding: 2.8rem 3.2rem;
    gap: 2.6rem;
  }
`;
