
const coreValues = [
  {
    number: "01",
    title: "Integrity & Accountability",
    description:
      "We uphold honesty, ethical conduct and responsibility in all our dealings. We remain accountable for our decisions, commitments, resources and actions.",
  },
  {
    number: "02",
    title: "Collaboration & Unity",
    description:
      "We believe collective progress is achieved through shared purpose, mutual respect and the active participation of members. We value diverse ideas, skills and contributions.",
  },
  {
    number: "03",
    title: "Stewardship & Responsibility",
    description:
      "We recognise that resources entrusted to the organisation must be managed prudently, transparently and in the best interests of its long-term objectives.",
  },
  {
    number: "04",
    title: "Entrepreneurial Excellence",
    description:
      "We embrace innovation, strategic thinking and calculated risk-taking to identify opportunities, develop viable businesses and create sustainable economic value.",
  },
  {
    number: "05",
    title: "Transparency & Good Governance",
    description:
      "We are committed to responsible leadership, sound governance, clear communication and transparent organisational processes that build trust and confidence.",
  },
  {
    number: "06",
    title: "Sustainability & Legacy",
    description:
      "We pursue decisions and investments that support long-term growth, institutional continuity and lasting value for present and future generations.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-white text-slate-900">

      {/* HERO */}
      <section className="relative overflow-hidden bg-brand-blue text-white">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border border-white/10" />
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border border-white/10" />
        <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-brand-orange/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-36">
          <div className="max-w-3xl">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-1 w-12 bg-brand-orange" />
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-orange">
                Who We Are
              </p>
            </div>

            <h1 className="mb-8 text-5xl font-bold leading-tight tracking-tight md:text-7xl">
              Building Together.
              <br />
              <span className="text-brand-orange">
                Growing Together.
              </span>
            </h1>

            <p className="max-w-2xl text-lg leading-8 text-white/80 md:text-xl">
              A shared vision. Collective resources. Sustainable
              enterprises. A lasting legacy.
            </p>

            <div className="mt-12 flex flex-wrap items-center gap-8 border-t border-white/20 pt-8">
              <div>
                <p className="text-4xl font-bold text-brand-orange">11</p>
                <p className="mt-1 text-sm text-white/70">
                  Founding Members
                </p>
              </div>

              <div className="h-12 w-px bg-white/20" />

              <div>
                <p className="text-lg font-semibold">One Shared Vision</p>
                <p className="mt-1 text-sm text-white/70">
                  Collective progress
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.8fr_1.2fr]">

          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-brand-blue">
              Our Story
            </p>

            <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              Eleven Founders.
              <br />
              <span className="text-brand-blue">
                One Shared Vision.
              </span>
            </h2>

            <div className="mt-8 h-1 w-20 bg-brand-orange" />

            <p className="mt-8 text-lg leading-8 text-slate-600">
              What began as a shared vision has grown into an
              organisation built around collective investment,
              enterprise development and long-term wealth creation.
            </p>

            <div className="mt-10 rounded-2xl bg-brand-blue p-8 text-white">
              <p className="text-4xl font-bold text-brand-orange">
                Together
              </p>
              <p className="mt-3 leading-7 text-white/80">
                We transform collective potential into sustainable
                economic opportunities.
              </p>
            </div>
          </div>

          <div className="space-y-6 text-base leading-8 text-slate-600 md:text-lg">
            <p>
              The Founders was established by eleven founding
              members united by a shared belief: that individuals
              can achieve greater economic progress and build
              lasting value when they combine their resources,
              knowledge, ideas and ambitions.
            </p>

            <p>
              The Founders operates as a collective investment
              organisation and a parent institution focused on
              establishing, owning and developing businesses.
              By mobilising financial resources, identifying
              viable opportunities and bringing together diverse
              expertise, we seek to transform collective potential
              into sustainable enterprises.
            </p>

            <p>
              Our approach goes beyond pooling financial resources.
              We are committed to building an organised and
              accountable institution where members can participate
              in investment opportunities, nurture business ideas,
              develop enterprises and contribute to shared
              economic growth.
            </p>

            <p>
              Guided by collaboration, accountability, shared
              responsibility and strategic growth, we aspire to
              build an institution that outlives individual
              participation — creating opportunities, strengthening
              enterprises and establishing a lasting legacy for
              future generations.
            </p>

            <p className="border-l-4 border-brand-orange pl-6 font-semibold text-brand-blue">
              We believe that what we build together today can
              create lasting value for generations to come.
            </p>
          </div>
        </div>
      </section>

      {/* VISION AND MISSION */}
      <section className="bg-slate-50 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 max-w-2xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-brand-blue">
              Our Direction
            </p>

            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Purpose That Drives Us.
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Our vision defines where we are going. Our mission
              defines how we intend to get there.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">

            {/* VISION */}
            <div className="relative overflow-hidden rounded-2xl bg-brand-blue p-9 text-white md:p-12">
              <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full border border-white/10" />

              <p className="relative text-sm font-bold uppercase tracking-[0.2em] text-brand-orange">
                01 / Our Vision
              </p>

              <h3 className="relative mt-8 text-3xl font-bold md:text-4xl">
                The Future We Envision
              </h3>

              <p className="relative mt-8 text-lg leading-8 text-white/80">
                To become a leading and enduring institution that
                transforms collective resources and shared ambitions
                into sustainable enterprises, economic opportunities
                and generational wealth.
              </p>

              <div className="mt-12 h-1 w-16 bg-brand-orange" />
            </div>

            {/* MISSION */}
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-9 shadow-sm md:p-12">
              <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full border border-brand-blue/10" />

              <p className="relative text-sm font-bold uppercase tracking-[0.2em] text-brand-blue">
                02 / Our Mission
              </p>

              <h3 className="relative mt-8 text-3xl font-bold text-slate-900 md:text-4xl">
                What Drives Our Work
              </h3>

              <p className="relative mt-8 text-lg leading-8 text-slate-600">
                To mobilise and strategically invest collective
                resources, develop and manage sustainable businesses,
                and create structured opportunities for members to
                participate in shared economic growth through
                collaboration, accountability and responsible
                leadership.
              </p>

              <div className="mt-12 h-1 w-16 bg-brand-orange" />
            </div>

          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-brand-blue">
              What Guides Us
            </p>

            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Our Core Values
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              The principles that shape our culture, guide our
              decisions and define how we work together.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((value) => (
              <article
                key={value.number}
                className="group rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-brand-orange hover:shadow-xl"
              >
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10 text-lg font-bold text-brand-blue transition-colors duration-300 group-hover:bg-brand-blue group-hover:text-white">
                  {value.number}
                </div>

                <h3 className="mb-4 text-xl font-bold leading-snug text-slate-900">
                  {value.title}
                </h3>

                <p className="text-base leading-7 text-slate-600">
                  {value.description}
                </p>

                <div className="mt-8 h-1 w-10 bg-brand-orange transition-all duration-300 group-hover:w-20" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING STATEMENT */}
      <section className="bg-brand-blue px-6 py-20 text-center text-white md:py-28">
        <div className="mx-auto max-w-4xl">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-brand-orange">
            Our Commitment
          </p>

          <h2 className="text-3xl font-bold leading-tight md:text-5xl">
            Building More Than Businesses.
            <br />
            <span className="text-brand-orange">
              Building a Legacy.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/80">
            We are building an enduring institution founded on
            collective ambition, responsible leadership and
            sustainable economic growth.
          </p>
        </div>
      </section>

    </main>
  );
}
