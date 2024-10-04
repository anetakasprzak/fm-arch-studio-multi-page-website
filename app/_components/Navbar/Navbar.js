"use client";

import Image from "next/image";
import {
  HamburgerWrapper,
  MobileMenuLinks,
  MenuLink,
  MobileMenuWrapper,
  NavBarWrapper,
  Overlay,
} from "./Navbar.styled";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <NavBarWrapper>
        <Image
          src="/assets/logo.svg"
          alt="company logo"
          width={77}
          height={32}
        />
        <HamburgerWrapper onClick={() => setIsMenuOpen((open) => !open)}>
          <Image
            src="/assets/icons/icon-hamburger.svg"
            alt="nav hamburger"
            width={24}
            height={17}
          />
        </HamburgerWrapper>
      </NavBarWrapper>
      {isMenuOpen && (
        <MobileMenuWrapper>
          <MobileMenuLinks>
            <MenuLink onClick={() => setIsMenuOpen(false)}>
              <Link href="/portfolio">Portfolio</Link>
            </MenuLink>
            <MenuLink onClick={() => setIsMenuOpen(false)}>
              <Link href="/about">About Us</Link>
            </MenuLink>
            <MenuLink onClick={() => setIsMenuOpen(false)}>
              <Link href="/contact">Contact</Link>
            </MenuLink>
          </MobileMenuLinks>
          <Overlay onClick={() => setIsMenuOpen(false)} />
        </MobileMenuWrapper>
      )}
    </>
  );
}
