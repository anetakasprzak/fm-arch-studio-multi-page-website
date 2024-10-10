"use client";

import "./page.styled";
import { AboutHeroImageWrapper, AboutHeroWrapper } from "./page.styled";

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
          media="(min-width: 34.5em)"
        />
        <source
          srcSet="/assets/about/mobile/image-hero.jpg"
          media="(min-width: 15em)"
        />
        <img src="/assets/about/mobile/image-hero.jpg" alt="hero image" />
      </AboutHeroImageWrapper>
    </AboutHeroWrapper>
  );
};

export default AboutPage;
