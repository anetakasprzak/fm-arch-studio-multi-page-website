"use client";

import "./page.styled";
import {
  ContactHeroImageWrapper,
  ContactHeroWrapper,
  ContactSection,
  ContactSpan,
  Form,
  FormButton,
  HeroContactText,
  HeroHeading,
  HeroTextBox,
  Textarea,
  TextInput,
} from "./page.styled";

const ContactPage = () => {
  return (
    <>
      <ContactHeroWrapper>
        <ContactHeroImageWrapper>
          <source
            srcSet="/assets/contact/desktop/image-hero.jpg"
            media="(min-width: 48em)"
          />
          <source
            srcSet="/assets/contact/tablet/image-hero.jpg"
            media="(min-width: 35em)"
          />
          <source
            srcSet="/assets/contact/mobile/image-hero.jpg"
            media="(min-width: 15em)"
          />
          <img src="/assets/contact/mobile/image-hero.jpg" alt="hero image" />
        </ContactHeroImageWrapper>

        <HeroTextBox>
          <ContactSpan>Contact</ContactSpan>
          <HeroHeading>
            Tell us about
            <br /> your project
          </HeroHeading>
          <HeroContactText>
            We&apos;d love to hear more about your project. Please, leave a
            message below or give us a call. We have two offices, one in Texas
            and one in Tennessee. If you find yourself nearby, come say hello!
          </HeroContactText>
        </HeroTextBox>
      </ContactHeroWrapper>
      <ContactSection>
        <h1>Connect with us</h1>
        <Form>
          <TextInput type="text" placeholder="Name" />
          <TextInput type="text" placeholder="Email" />
          <Textarea placeholder="Message" />
          <FormButton type="submit" />
        </Form>
      </ContactSection>
    </>
  );
};

export default ContactPage;
