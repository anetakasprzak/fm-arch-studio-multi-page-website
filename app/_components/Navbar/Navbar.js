"use client";

import Image from "next/image";
import {
  HamburgerWrapper,
  MobileMenuLinks,
  MobileMenuLink,
  MobileMenuWrapper,
  NavBarWrapper,
  Overlay,
  Menu,
  MenuLink,
} from "./Navbar.styled";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  return (
    <>
      <NavBarWrapper>
        <Link href="/">
          <Image
            src="/assets/logo.svg"
            alt="company logo"
            width={77}
            height={32}
          />
        </Link>
        <Menu>
          <MenuLink>
            <Link href="/portfolio">Portfolio</Link>
          </MenuLink>
          <MenuLink>
            <Link href="/about">About Us</Link>
          </MenuLink>
          <MenuLink>
            <Link href="/contact">Contact</Link>
          </MenuLink>
        </Menu>
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
            <MobileMenuLink onClick={() => setIsMenuOpen(false)}>
              <Link href="/portfolio">Portfolio</Link>
            </MobileMenuLink>
            <MobileMenuLink onClick={() => setIsMenuOpen(false)}>
              <Link href="/about">About Us</Link>
            </MobileMenuLink>
            <MobileMenuLink onClick={() => setIsMenuOpen(false)}>
              <Link href="/contact">Contact</Link>
            </MobileMenuLink>
          </MobileMenuLinks>
          <Overlay onClick={() => setIsMenuOpen(false)} />
        </MobileMenuWrapper>
      )}
    </>
  );
}
