"use client";

import "./page.styled";
import {
  AboutHeroImageWrapper,
  AboutHeroWrapper,
  HeroTextBox,
  AboutSpan,
  HeroHeading,
  HeroAboutText,
} from "./page.styled";

const AboutPage = () => {
  return (
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
          step of the way. Strong relationships are at the core of everything we
          do. This extends to the relationship our projects have with their
          surroundings.
        </HeroAboutText>
      </HeroTextBox>
    </AboutHeroWrapper>
  );
};

export default AboutPage;
