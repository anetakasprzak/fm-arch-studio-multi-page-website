/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import {
  HeroWrapper,
  MainPageImgWrapper,
  HeroContentBox,
  HeroHeading,
  HeroText,
  WelcomeWrapper,
  WelcomeSpan,
} from "./page.styled";
import Button from "./_components/button/Button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <HeroWrapper>
        <MainPageImgWrapper>
          <source
            srcSet="/assets/home/desktop/image-hero-paramour.jpg"
            media="(min-width: 48em)"
          />
          <source
            srcSet="/assets/home/tablet/image-hero-paramour.jpg"
            media="(min-width: 34.5em)"
          />
          <source
            srcSet="/assets/home/mobile/image-hero-paramour.jpg"
            media="(min-width: 15em)"
          />
          <img
            src="/assets/home/mobile/image-hero-paramour.jpg"
            alt="hero image"
          />
        </MainPageImgWrapper>
        <HeroContentBox>
          <HeroHeading>
            Project
            <br /> Paramour
          </HeroHeading>
          <HeroText>
            Project made for an art museum near Southwest London. Project
            Paramour is a statement of bold, modern architecture.
          </HeroText>
          <Link href="/portfolio">
            <Button>See Our Portfolio</Button>
          </Link>
        </HeroContentBox>
      </HeroWrapper>

      <WelcomeWrapper>
        <WelcomeSpan>Welcome</WelcomeSpan>
      </WelcomeWrapper>
    </>
  );
}
