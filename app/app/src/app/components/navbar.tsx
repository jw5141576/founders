
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-10">

        {/* BRAND */}
        <Link href="/" onClick={closeMenu} className="flex items-center">
          <Image
            src="/images/founders-logo-white.png"
            alt="The Founders logo"
            width={150}
            height={150}
            priority
            className="h-14 w-14 object-contain"
          />

          <span className="ml-2 text-lg font-bold tracking-tight text-[#14263D]">
            THE <span className="text-[#C5A46D]">FOUNDERS</span>
          </span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-8 text-sm font-medium text-[#202B36] md:flex">
          <Link href="/about" className="transition hover:text-[#C5A46D]">
            About Us
          </Link>

          <Link href="/#pillars" className="transition hover:text-[#C5A46D]">
            What We Do
          </Link>

          <Link href="/#membership" className="transition hover:text-[#C5A46D]">
            Membership
          </Link>

          <Link href="/#contact" className="transition hover:text-[#C5A46D]">
            Contact
          </Link>
        </div>

        {/* DESKTOP CALL TO ACTION */}
        <Link
          href="/#membership"
          className="hidden rounded-md bg-[#14263D] px-5 py-3 text-sm font-semibold !text-white transition hover:bg-[#0B1727] md:inline-flex"
        >
          Join The Founders
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 text-[#14263D] transition hover:bg-slate-50 md:hidden"
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-6 w-6"
            >
              <path strokeLinecap="round" d="m6 6 12 12M18 6 6 18" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-6 w-6"
            >
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>

        {/* MOBILE NAVIGATION */}
        {menuOpen && (
          <div
            id="mobile-navigation"
            className="absolute left-0 right-0 top-full border-t border-slate-200 bg-white px-6 py-6 shadow-xl md:hidden"
          >
            <div className="flex flex-col gap-5 text-sm font-medium text-[#202B36]">
              <Link href="/about" onClick={closeMenu}>
                About Us
              </Link>

              <Link href="/#pillars" onClick={closeMenu}>
                What We Do
              </Link>

              <Link href="/#membership" onClick={closeMenu}>
                Membership
              </Link>

              <Link href="/#contact" onClick={closeMenu}>
                Contact
              </Link>

              <Link
                href="/#membership"
                onClick={closeMenu}
                className="mt-2 rounded-md bg-[#14263D] px-5 py-3 text-center font-semibold !text-white transition hover:bg-[#0B1727]"
              >
                Join The Founders
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
