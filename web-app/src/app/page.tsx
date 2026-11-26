
import Image from "next/image";
import Link from "next/link";

const copyrightYear = new Date().getFullYear();

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#171717]">

      {/* HERO SECTION */}

      {/* HERO SECTION */}
      <section className="relative isolate overflow-hidden bg-[#0B1727] text-white">

        {/* Background decoration */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -right-20 -top-20 h-[350px] w-[350px] rounded-full border border-white/10" />
        <div className="pointer-events-none absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-[#C5A46D]/10 blur-[100px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 md:grid-cols-2 md:py-28 lg:px-10 lg:gap-20">

          {/* HERO CONTENT */}
          <div className="max-w-2xl">

            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-12 bg-[#C5A46D]" />
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C5A46D]">
                Unity. Investment. Growth.
              </p>
            </div>

            <h1 className="text-5xl font-bold leading-[1.12] tracking-tight md:text-6xl lg:text-7xl">
              Building Together.
              <span className="mt-2 block text-[#C5A46D]">
                Growing Together.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-white/80 md:text-xl">
              The Founders brings people, resources and ideas together
              to build sustainable investments, develop enterprises and
              create opportunities through collective growth.
            </p>

            {/* HERO ACTIONS */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#about"
                className="rounded-md bg-[#C5A46D] px-7 py-4 font-semibold text-[#0B1727] transition duration-300 hover:bg-[#E7D8B5]"
              >
                Discover Our Organisation
              </a>

              <a
                href="#membership"
                className="rounded-md border border-white/40 px-7 py-4 font-semibold text-white transition duration-300 hover:border-[#C5A46D] hover:bg-white/5"
              >
                Become a Member
              </a>
            </div>

            {/* HERO FOOTNOTE */}
            <div className="mt-14 flex items-center gap-4 border-t border-white/15 pt-7">
              <div className="h-10 w-1 bg-[#C5A46D]" />
              <p className="text-sm leading-6 text-white/65">
                Collective ambition.
                <span className="block font-medium text-white">
                  Sustainable enterprise. Lasting value.
                </span>
              </p>
            </div>

          </div>

          {/* HERO IMAGE */}
          <div className="relative mx-auto w-full max-w-xl">

            <div className="absolute -inset-3 rounded-2xl border border-[#C5A46D]/30" />

            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#14263D] p-2 shadow-2xl">
              <Image
                src="/images/founder-meet.jpeg"
                alt="Members of The Founders gathered together"
                width={650}
                height={650}
                priority
                className="h-[340px] w-full rounded-lg object-cover md:h-[460px]"
              />
            </div>

            <div className="absolute -bottom-6 -left-4 rounded-lg border border-white/10 bg-[#14263D] px-6 py-4 shadow-xl md:-left-8">
              <p className="text-2xl font-bold text-[#C5A46D]">11</p>
              <p className="text-xs font-medium uppercase tracking-wider text-white/75">
                Founding Members
              </p>
            </div>

          </div>

        </div>
      </section>
      
      {/* CORE PILLARS */}
      <section id="pillars" className="bg-[#F7F8FA] px-6 py-24 md:py-32 lg:px-10">

        <div className="mx-auto max-w-7xl">

          {/* SECTION INTRODUCTION */}
          <div className="mb-16 max-w-2xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#C5A46D]" />
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#14263D]">
                Our Focus
              </p>
            </div>

            <h2 className="text-4xl font-bold leading-tight tracking-tight text-[#14263D] md:text-5xl">
              Strength Through
              <span className="block text-[#C5A46D]">
                Collective Action.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#697786]">
              We believe that combining resources, knowledge and
              entrepreneurial ambition creates stronger opportunities
              than working in isolation.
            </p>
          </div>

          {/* PILLAR CARDS */}
          <div className="grid gap-6 md:grid-cols-3">

            {/* PILLAR 01 */}
            <article className="group relative overflow-hidden rounded-xl border border-[#E1E6EB] bg-white p-9 transition-all duration-300 hover:-translate-y-2 hover:border-[#C5A46D] hover:shadow-xl">

              <div className="flex items-center justify-between">
                <span className="text-4xl font-bold tracking-tight text-[#C5A46D]">
                  01
                </span>
                <span className="h-10 w-10 rounded-full border border-[#E1E6EB] transition-colors group-hover:border-[#C5A46D]" />
              </div>

              <div className="my-8 h-px w-full bg-[#E1E6EB]" />

              <h3 className="text-xl font-bold text-[#14263D]">
                Collective Investment
              </h3>

              <p className="mt-4 text-base leading-7 text-[#697786]">
                Pooling financial resources and investing strategically
                to create shared economic opportunities.
              </p>

              <div className="mt-8 h-1 w-10 bg-[#C5A46D] transition-all duration-300 group-hover:w-20" />
            </article>

            {/* PILLAR 02 */}
            <article className="group relative overflow-hidden rounded-xl border border-[#E1E6EB] bg-white p-9 transition-all duration-300 hover:-translate-y-2 hover:border-[#C5A46D] hover:shadow-xl">

              <div className="flex items-center justify-between">
                <span className="text-4xl font-bold tracking-tight text-[#C5A46D]">
                  02
                </span>
                <span className="h-10 w-10 rounded-full border border-[#E1E6EB] transition-colors group-hover:border-[#C5A46D]" />
              </div>

              <div className="my-8 h-px w-full bg-[#E1E6EB]" />

              <h3 className="text-xl font-bold text-[#14263D]">
                Enterprise Development
              </h3>

              <p className="mt-4 text-base leading-7 text-[#697786]">
                Building and developing business ventures with a focus
                on sustainability, accountability and long-term value.
              </p>

              <div className="mt-8 h-1 w-10 bg-[#C5A46D] transition-all duration-300 group-hover:w-20" />
            </article>

            {/* PILLAR 03 */}
            <article className="group relative overflow-hidden rounded-xl border border-[#E1E6EB] bg-white p-9 transition-all duration-300 hover:-translate-y-2 hover:border-[#C5A46D] hover:shadow-xl">

              <div className="flex items-center justify-between">
                <span className="text-4xl font-bold tracking-tight text-[#C5A46D]">
                  03
                </span>
                <span className="h-10 w-10 rounded-full border border-[#E1E6EB] transition-colors group-hover:border-[#C5A46D]" />
              </div>

              <div className="my-8 h-px w-full bg-[#E1E6EB]" />

              <h3 className="text-xl font-bold text-[#14263D]">
                Shared Resources
              </h3>

              <p className="mt-4 text-base leading-7 text-[#697786]">
                Leveraging collective knowledge, networks and resources
                to strengthen members and business initiatives.
              </p>

              <div className="mt-8 h-1 w-10 bg-[#C5A46D] transition-all duration-300 group-hover:w-20" />
            </article>

          </div>
        </div>
      </section>

      
      {/* ABOUT */}
      <section id="about" className="bg-white px-6 py-24 md:py-32 lg:px-10">

        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">

          {/* LEFT: SECTION HEADING */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#C5A46D]" />
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#14263D]">
                Who We Are
              </p>
            </div>

            <h2 className="text-4xl font-bold leading-tight tracking-tight text-[#14263D] md:text-5xl">
              More Than an Organisation.
              <span className="mt-2 block text-[#C5A46D]">
                A Collective Vision.
              </span>
            </h2>

            <div className="mt-8 h-1 w-16 bg-[#C5A46D]" />

            <p className="mt-8 max-w-md text-lg leading-8 text-[#697786]">
              Eleven founding members united by a shared ambition
              to build sustainable enterprises, create economic
              opportunities and establish lasting value.
            </p>
          </div>

          {/* RIGHT: ORGANISATION DESCRIPTION */}
          <div className="relative rounded-2xl bg-[#F7F8FA] p-8 md:p-12">

            <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-3xl border-b border-l border-[#C5A46D]/40" />

            <p className="text-lg leading-8 text-[#697786]">
              The Founders is built on the belief that meaningful
              progress happens when people work towards a common
              purpose. By bringing together financial resources,
              professional skills and entrepreneurial ideas, we aim
              to establish a strong foundation for collective
              investment and enterprise development.
            </p>

            <p className="mt-6 text-lg leading-8 text-[#697786]">
              Our approach emphasises responsible management,
              transparency, collaboration and sustainable growth.
            </p>

            <Link
              href="/about"
              className="mt-9 inline-flex items-center gap-3 font-semibold text-[#14263D] transition hover:text-[#C5A46D]"
            >
              Discover Our Story

              <span aria-hidden="true" className="text-xl">
                →
              </span>
            </Link>

          </div>

        </div>
      </section>

      {/* MEMBERSHIP CTA */}
      <section
        id="membership"
        className="relative isolate overflow-hidden bg-[#14263D] px-6 py-24 text-white md:py-32"
      >
        {/* Decorative elements */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-[#C5A46D]/10 blur-[100px]" />

        <div className="relative mx-auto max-w-4xl text-center">

          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#C5A46D]" />
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C5A46D]">
              Be Part of the Vision
            </p>
            <span className="h-px w-10 bg-[#C5A46D]" />
          </div>

          <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Great Things Are Built Together.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/75">
            Join a collective committed to shared resources,
            investment opportunities and enterprise development.
            Together, we can build sustainable businesses and
            create lasting economic value.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="rounded-md bg-[#C5A46D] px-8 py-4 font-semibold text-[#0B1727] transition duration-300 hover:bg-[#E7D8B5]"
            >
              Get in Touch
            </a>

            <Link
              href="/about"
              className="rounded-md border border-white/30 px-8 py-4 font-semibold text-white transition duration-300 hover:border-[#C5A46D] hover:bg-white/5"
            >
              Learn About Us
            </Link>
          </div>

        </div>
      </section>
      
      {/* FOOTER */}
      <footer id="contact" className="bg-[#0B1727] px-6 pt-16 text-white lg:px-10">

        <div className="mx-auto grid max-w-7xl gap-12 border-b border-white/10 pb-14 md:grid-cols-2 lg:grid-cols-3">

          {/* BRAND */}
          <div>
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/images/founders-logo-white.png"
                alt="The Founders logo"
                width={70}
                height={70}
                className="h-14 w-14 object-contain"
              />

              <span className="ml-2 text-lg font-bold tracking-tight">
                THE <span className="text-[#C5A46D]">FOUNDERS</span>
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/60">
              A collective investment and enterprise organisation
              committed to collaboration, responsible growth and
              building lasting value.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.18em] text-[#C5A46D]">
              Explore
            </h3>

            <ul className="space-y-4 text-sm text-white/70">
              <li>
                <Link href="/" className="transition hover:text-[#C5A46D]">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/about" className="transition hover:text-[#C5A46D]">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/#pillars" className="transition hover:text-[#C5A46D]">
                  What We Do
                </Link>
              </li>

              <li>
                <Link href="/#membership" className="transition hover:text-[#C5A46D]">
                  Membership
                </Link>
              </li>
            </ul>
          </div>

          {/* ORGANISATION */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.18em] text-[#C5A46D]">
              Our Principles
            </h3>

            <ul className="space-y-4 text-sm text-white/70">
              <li>Unity & Collaboration</li>
              <li>Collective Investment</li>
              <li>Responsible Leadership</li>
              <li>Sustainable Enterprise</li>
            </ul>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 py-7 text-center md:flex-row md:text-left">
          <p className="text-xs text-white/50">
            © {copyrightYear} The Founders. All rights reserved.
          </p>

          <p className="text-xs font-medium tracking-wider text-white/50">
            BUILDING TOGETHER. GROWING TOGETHER.
          </p>
        </div>

      </footer>

    </main>
  );
}
