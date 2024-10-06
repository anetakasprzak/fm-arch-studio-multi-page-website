"use client";

import Image from "next/image";
import {
  HeroWrapper,
  MainPageImgWrapper,
  HeroContentBox,
  HeroHeading,
  HeroText,
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
            media="(min-width: 62em)"
          />
          <source
            srcSet="/assets/home/tablet/image-hero-paramour.jpg"
            media="(min-width: 34.5em)"
          />
          <source
            srcSet="/assets/home/mobile/image-hero-paramour.jpg"
            media="(min-width: 15em)"
          />
          <Image
            src="/assets/home/mobile/image-hero-paramour.jpg"
            alt="hero image"
            width={300}
            height={560}
            layout="responsive"
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
    </>
  );
}
