"use client";

import "./page.styled";
import {
  AboutHeroImageWrapper,
  AboutHeroWrapper,
  HeroTextBox,
  AboutSpan,
  HeroHeading,
  HeroAboutText,
  HeritageHeading,
  HeritageSection,
  HeritageText,
} from "./page.styled";

const AboutPage = () => {
  return (
    <>
      <AboutHeroWrapper>
        <AboutHeroImageWrapper>
          <source
            srcSet="/assets/about/desktop/image-hero.jpg"
            media="(min-width: 48em)"
          />
          <source
            srcSet="/assets/about/tablet/image-hero.jpg"
            media="(min-width: 35em)"
          />
          <source
            srcSet="/assets/about/mobile/image-hero.jpg"
            media="(min-width: 15em)"
          />
          <img src="/assets/about/mobile/image-hero.jpg" alt="hero image" />
        </AboutHeroImageWrapper>

        <HeroTextBox>
          <AboutSpan>About</AboutSpan>
          <HeroHeading>
            Your team of
            <br /> professionals
          </HeroHeading>
          <HeroAboutText>
            Our small team of world-class professionals will work with you every
            step of the way. Strong relationships are at the core of everything
            we do. This extends to the relationship our projects have with their
            surroundings.
          </HeroAboutText>
        </HeroTextBox>
      </AboutHeroWrapper>

      <HeritageSection>
        <HeritageHeading>
          Our
          <br />
          Heritage
        </HeritageHeading>
        <HeritageText>
          Founded in 2007, we started as a trio of architects. Our complimentary
          skills and relentless attention to detail turned Arch into one of the
          most sought after boutique firms in the country.
          <br />
          Speciliazing in Urban Design allowed us to focus on creating
          exceptional structures that live in harmony with their surroundings.
          We consider every detail from every surrounding element to inform our
          designs.
          <br />
          Our small team of world-class professionals provides input on every
          project.
        </HeritageText>
      </HeritageSection>
    </>
  );
};

export default AboutPage;
