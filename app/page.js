/* eslint-disable @next/next/no-img-element */
"use client";

import { portfolioData } from "@/app/data";
import {
  HeroWrapper,
  MainPageImgWrapper,
  HeroContentBox,
  HeroHeading,
  HeroText,
  WelcomeWrapper,
  WelcomeSpan,
  WelcomeHeading,
  WelcomeText,
  MobileMiniBorder,
  AboutUsWrapper,
  HeadingAboutUs,
  FeaturedWrapper,
  FeaturedHeadingBox,
  FeaturedHeader,
  DisplayButtonWrapper,
} from "./page.styled";
import Button from "./_components/Button/Button";
import Link from "next/link";
import { PortfolioElement } from "./(root)/portfolio/page";

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
        {/* <MobileMiniBorder /> */}
        <WelcomeSpan>Welcome</WelcomeSpan>
        <WelcomeHeading>
          Welcome to <br />
          Arch Studio
        </WelcomeHeading>
        <WelcomeText>
          We have a unique network and skillset to help bring your projects to
          life. Our small team of highly skilled individuals combined with our
          large network put us in a strong position to deliver exceptional
          results.
          <br />
          <br /> Over the past 10 years, we have worked on all kinds of
          projects. From stations to high-rise buildings, we create spaces that
          inspire and delight.
          <br />
          <br /> We work closely with our clients so that we understand the
          intricacies of each project. This allows us to work in harmony the
          surrounding area to create truly stunning projects that will stand the
          test of time.
        </WelcomeText>
      </WelcomeWrapper>

      <AboutUsWrapper>
        <HeadingAboutUs>
          Small team,
          <br /> big ideas
        </HeadingAboutUs>
        <Link href="/about">
          <Button>About Us</Button>
        </Link>
      </AboutUsWrapper>

      <FeaturedWrapper>
        <FeaturedHeadingBox>
          <FeaturedHeader>Featured</FeaturedHeader>
          <DisplayButtonWrapper>
            <Link href="/portfolio">
              <Button>See All</Button>
            </Link>
          </DisplayButtonWrapper>
        </FeaturedHeadingBox>
        <div>
          {portfolioData.map((obj) => {
            return <PortfolioElement key={obj.id} obj={obj} />;
          })}
        </div>
      </FeaturedWrapper>
    </>
  );
}
