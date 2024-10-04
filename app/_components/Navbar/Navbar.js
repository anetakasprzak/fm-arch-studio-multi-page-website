"use client";

import Image from "next/image";
import {
  HamburgerWrapper,
  MobileMenuLinks,
  MobileMenuWrapper,
  NavBarWrapper,
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
            <li>
              <Link href="/portfolio">Portfolio</Link>
            </li>

            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </MobileMenuLinks>
        </MobileMenuWrapper>
      )}
    </>
  );
}
