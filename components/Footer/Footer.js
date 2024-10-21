"use client";

import Image from "next/image";
import Link from "next/link";
import {
  LogoWrapper,
  FooterBox,
  FooterLinksBox,
  FooterLink,
  ButtonWrapper,
} from "./Footer.styled";
import Button from "../Button/Button";

export const Footer = () => {
  return (
    <FooterBox>
      <Link href="/">
        <LogoWrapper>
          <Image
            src="/assets/logo-white.svg"
            alt="company logo"
            width={60}
            height={32}
          />
        </LogoWrapper>
      </Link>
      <FooterLinksBox>
        <FooterLink>
          <Link href="/portfolio">Portfolio</Link>
        </FooterLink>
        <FooterLink>
          <Link href="/about">About Us</Link>
        </FooterLink>
        <FooterLink>
          <Link href="/contact">Contact</Link>
        </FooterLink>
      </FooterLinksBox>
      <ButtonWrapper>
        <Link href="/portfolio">
          <Button>See Our Portfolio</Button>
        </Link>
      </ButtonWrapper>
    </FooterBox>
  );
};
