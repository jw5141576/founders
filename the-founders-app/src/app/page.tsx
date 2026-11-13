
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#171717]">

      {/* NAVIGATION */}
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-10">

          <a href="#" className="flex items-center">
            <Image
              src="/images/founders-logo-white.png"
              alt="The Founders logo"
              width={150}
              height={150}
              priority
              className="h-16 w-16 object-contain"
            />
            <span className="ml-2 text-lg font-bold tracking-tight">
              THE <span className="text-[#0645a5]">FOUNDERS</span>
            </span>
          </a>

          <div className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="#about" className="transition hover:text-[#0645a5]">
              About Us
            </a>
            <a href="#pillars" className="transition hover:text-[#0645a5]">
              What We Do
            </a>
            <a href="#membership" className="transition hover:text-[#0645a5]">
              Membership
            </a>
            <a href="#contact" className="transition hover:text-[#0645a5]">
              Contact
            </a>
          </div>

          <a
            href="#membership"
            className="rounded-md bg-[#0645a5] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#08377f]"
          >
            Join The Founders
          </a>

        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#0645a5] text-white">

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:py-32 lg:px-10">

          <div>
            <p className="mb-6 font-semibold uppercase tracking-[0.25em] text-[#ffb238]">
              Unity. Investment. Growth.
            </p>

            <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Building Together.
              <span className="block text-[#ffb238]">
                Growing Together.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-blue-100">
              The Founders brings people, resources and ideas together
              to build sustainable investments, develop enterprises and
              create opportunities through collective growth.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#about"
                className="rounded-md bg-[#ffb238] px-7 py-4 font-semibold text-[#171717] transition hover:bg-[#ffd080]"
              >
                Discover Our Organisation
              </a>

              <a
                href="#membership"
                className="rounded-md border border-white/60 px-7 py-4 font-semibold text-white transition hover:bg-white hover:text-[#0645a5]"
              >
                Become a Member
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="rounded-2xl bg-white p-6 shadow-2xl md:p-10">
              <Image
                src="/images/founder-meet.jpeg"
                alt="The Founders — Unity and collective growth"
                width={500}
                height={500}
                priority
                className="h-auto w-full max-w-md object-contain"
              />
            </div>
          </div>

        </div>
      </section>

      {/* CORE PILLARS */}
      <section id="pillars" className="bg-[#f5f6f8] px-6 py-24 lg:px-10">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="font-semibold uppercase tracking-widest text-[#0645a5]">
              Our Focus
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Strength Through Collective Action
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              We believe that combining resources, knowledge and
              entrepreneurial ambition creates stronger opportunities
              than working in isolation.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-3">

            <article className="rounded-xl border border-gray-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-blue-50 text-2xl font-bold text-[#0645a5]">
                01
              </div>
              <h3 className="text-xl font-bold">Collective Investment</h3>
              <p className="mt-4 leading-7 text-gray-600">
                Pooling financial resources and investing strategically
                to create shared economic opportunities.
              </p>
            </article>

            <article className="rounded-xl border border-gray-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-orange-50 text-2xl font-bold text-[#d99018]">
                02
              </div>
              <h3 className="text-xl font-bold">Enterprise Development</h3>
              <p className="mt-4 leading-7 text-gray-600">
                Building and developing business ventures with a focus
                on sustainability, accountability and long-term value.
              </p>
            </article>

            <article className="rounded-xl border border-gray-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-blue-50 text-2xl font-bold text-[#0645a5]">
                03
              </div>
              <h3 className="text-xl font-bold">Shared Resources</h3>
              <p className="mt-4 leading-7 text-gray-600">
                Leveraging collective knowledge, networks and resources
                to strengthen members and business initiatives.
              </p>
            </article>

          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 py-24 lg:px-10">

        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">

          <div>
            <p className="font-semibold uppercase tracking-widest text-[#0645a5]">
              Who We Are
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
              More Than an Organisation.
              <span className="block text-[#0645a5]">
                A Collective Vision.
              </span>
            </h2>
          </div>

          <div>
            <p className="leading-8 text-gray-600">
              The Founders is built on the belief that meaningful
              progress happens when people work towards a common
              purpose. By bringing together financial resources,
              professional skills and entrepreneurial ideas, we aim
              to establish a strong foundation for collective
              investment and enterprise development.
            </p>

            <p className="mt-5 leading-8 text-gray-600">
              Our approach emphasises responsible management,
              transparency, collaboration and sustainable growth.
            </p>
          </div>

        </div>
      </section>

      {/* MEMBERSHIP CTA */}
      <section id="membership" className="bg-[#101b2d] px-6 py-24 text-center text-white">

        <div className="mx-auto max-w-3xl">

          <p className="font-semibold uppercase tracking-widest text-[#ffb238]">
            Be Part of the Vision
          </p>

          <h2 className="mt-5 text-3xl font-bold md:text-5xl">
            Great Things Are Built Together.
          </h2>

          <p className="mt-6 leading-8 text-gray-300">
            Join a collective committed to shared resources,
            investment opportunities and enterprise development.
          </p>

          <a
            href="#contact"
            className="mt-9 inline-block rounded-md bg-[#ffb238] px-8 py-4 font-bold text-[#171717] transition hover:bg-[#ffd080]"
          >
            Get in Touch
          </a>

        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="bg-white px-6 py-10 lg:px-10">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 border-b border-gray-100 pb-8 md:flex-row">

          <div className="flex items-center gap-3">
            <Image
              src="/images/founders-logo.jpg"
              alt="The Founders logo"
              width={60}
              height={60}
              className="h-12 w-12 object-contain"
            />

            <div>
              <p className="font-bold">THE FOUNDERS</p>
              <p className="text-sm text-gray-500">
                Building Together. Growing Together.
              </p>
            </div>
          </div>

          <p className="text-sm text-gray-500">
            Unity. Investment. Growth.
          </p>

        </div>

        <p className="mx-auto max-w-7xl pt-7 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} The Founders. All rights reserved.
        </p>

      </footer>

    </main>
  );
}
