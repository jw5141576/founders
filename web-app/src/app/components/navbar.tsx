
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-10">

        {/* BRAND */}
        <Link href="/" className="flex items-center">
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

        {/* CALL TO ACTION */}
        <Link
          href="/#membership"
          className="rounded-md bg-[#14263D] px-5 py-3 text-sm font-semibold !text-white transition hover:bg-[#0B1727]"
        >
          Join The Founders
        </Link>

      </nav>
    </header>
  );
}
