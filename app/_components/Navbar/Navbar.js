"use client";

import Image from "next/image";
import { HamburgerWrapper, MobileMenu, NavBarWrapper } from "./Navbar.styled";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <NavBarWrapper>
        <Image
          src="/assets/logo.svg"
          alt="company logo"
          width={77}
          height={32}
        />
        <HamburgerWrapper>
          <Image
            src="/assets/icons/icon-hamburger.svg"
            alt="nav hamburger"
            width={24}
            height={17}
          />
        </HamburgerWrapper>
      </NavBarWrapper>
      <MobileMenu>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>

        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </MobileMenu>
    </>
  );
}
