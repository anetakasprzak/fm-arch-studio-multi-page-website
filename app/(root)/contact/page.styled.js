import styled from "styled-components";

export const ContactHeroWrapper = styled.div`
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

export const ContactHeroImageWrapper = styled.picture`
  filter: brightness(0.6);
`;

export const HeroTextBox = styled.div`
  background-color: #fff;
  padding: 4rem 2rem 1rem 3rem;
  margin-top: -4rem;
  z-index: 5;
  max-width: 90%;
  place-self: start;

  @media screen and (min-width: 23.5em) {
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
    left: -1rem;
  }

  @media screen and (min-width: 43em) {
    left: 0;
  }

  @media screen and (min-width: 62em) {
    font-size: 20rem;
    top: -14rem;
  }

  @media screen and (min-width: 90em) {
    left: 6rem;
    top: -16rem;
    font-size: 23rem;
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

export const HeroContactText = styled.p`
  color: #60636d;
  line-height: 2.4rem;
`;

////////////////  CONTACT DETAILS ///////////////////

export const ContactDetailsSection = styled.section`
  padding: 4rem 3rem;
  display: flex;
  flex-direction: column;

  gap: 3rem;

  @media screen and (min-width: 23.5em) {
    padding: 4rem 5rem;
  }

  @media screen and (min-width: 28.5em) {
    padding: 6rem 9rem;
  }

  @media screen and (min-width: 50em) {
    padding: 8rem 10rem;
  }

  @media screen and (min-width: 55em) {
    padding: 8rem 12rem;
  }

  @media screen and (min-width: 62em) {
    flex-direction: row;
    align-items: center;
    padding: 10rem 7rem;
  }

  @media screen and (min-width: 72em) {
    gap: 10rem;
  }

  @media screen and (min-width: 90em) {
    padding: 10rem 12rem;
  }
`;

export const HeadingContactDetails = styled.h2`
  color: #1b1d23;
  font-size: 3.2rem;
  line-height: 4rem;

  @media screen and (min-width: 28.5em) {
    font-size: 3.6rem;
  }

  @media screen and (min-width: 35em) {
    font-size: 5rem;
    line-height: 6rem;
  }

  @media screen and (min-width: 43em) {
    font-size: 6.4rem;
    margin-bottom: 1.6rem;
  }

  @media screen and (min-width: 62em) {
    font-size: 7.2rem;
    line-height: 7rem;
  }

  @media screen and (min-width: 90em) {
    font-size: 7.4rem;
  }
`;

export const OfficeBox = styled.div`
  color: #60636d;
  font-size: 1.8rem;
`;

export const OfficeHeading = styled.h4`
  margin-bottom: 0.4rem;
  font-weight: 700;
  line-height: 3.5rem;
`;

export const OfficeText = styled.p`
  font-weight: 500;
  line-height: 2.4rem;
  margin-bottom: 0.2rem;
`;

////////////////  MAP IMG ///////////////////

export const MapSection = styled.div`
  display: grid;
  place-items: center;
  margin-bottom: 3rem;

  @media screen and (min-width: 43em) {
    margin-bottom: 5rem;
  }

  @media screen and (min-width: 62em) {
    margin-bottom: 8rem;
  }
`;

export const MapImgWrapper = styled.picture``;

////////////////  CONTACT FORM ///////////////////

export const ContactFormSection = styled.section`
  padding: 3.2rem 3.2rem 12rem 3.2rem;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 62em) {
    flex-direction: row;
    gap: 6rem;
    margin-bottom: 12rem;
  }

  @media screen and (min-width: 72em) {
    padding: 4rem 5rem;
    gap: 8rem;
  }

  @media screen and (min-width: 82em) {
    padding: 6rem 12rem;
    gap: 10rem;
  }

  @media screen and (min-width: 90em) {
    padding: 8rem 18rem;
  }

  @media screen and (min-width: 106em) {
    padding: 6rem 24rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 4.3rem;
  position: relative;
  width: 100%;
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
`;

export const TextInput = styled.input`
  all: unset;
  height: 4.4rem;
  border-bottom: ${(props) =>
    props.hasError ? "1px solid #df5656" : "1px solid #1b1d23"};

  &::placeholder {
    opacity: ${(props) => (props.hasError ? 0.5 : 1)};
    color: ${(props) => (props.hasError ? "#df5656" : "#c8ccd8")};
  }
`;

export const Textarea = styled.textarea`
  all: unset;
  height: 9.2rem;
  border-bottom: ${(props) =>
    props.hasError ? "1px solid #df5656" : "1px solid #1b1d23"};

  &::placeholder {
    opacity: ${(props) => (props.hasError ? 0.5 : 1)};
    color: ${(props) => (props.hasError ? "#df5656" : "#c8ccd8")};
  }
`;

export const FormButton = styled.button`
  all: unset;
  width: 8rem;
  height: 8rem;
  background: #1b1d23 url("/assets/icons/icon-arrow.svg") no-repeat center;
  margin-left: auto;
  position: absolute;
  bottom: -8rem;
  right: 0;
`;

export const Error = styled.span`
  color: #df5656;
  position: absolute;
  bottom: 1rem;
  right: 0;
`;
