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
import { usePathname } from "next/navigation";

export default function Navbar() {
  const currentPath = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          <MenuLink isActive={currentPath === "/portfolio"}>
            <Link href="/portfolio">Portfolio</Link>
          </MenuLink>
          <MenuLink isActive={currentPath === "/about"}>
            <Link href="/about">About Us</Link>
          </MenuLink>
          <MenuLink isActive={currentPath === "/contact"}>
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
