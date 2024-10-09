"use client";

import Image from "next/image";
import Link from "next/link";
import { LogoWrapper } from "./Footer.styled";

export const Footer = () => {
  return (
    <LogoWrapper>
      <Link href="/">
        <Image
          src="/assets/logo-white.svg"
          alt="company logo"
          width={77}
          height={32}
        />
      </Link>
    </LogoWrapper>
  );
};
