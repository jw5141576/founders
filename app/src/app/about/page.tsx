
export default function AboutPage() {
  return (
    <main>
      {/* 1. About page hero */}
      <section className="bg-brand-blue text-white px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <p className="text-brand-orange font-semibold uppercase tracking-widest mb-4">
            Who We Are
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Building Together.
            <br />
            Growing Together.
          </h1>

          <p className="max-w-2xl text-lg text-white/85 leading-relaxed">
            A shared vision. Collective resources. Sustainable
            enterprises. A lasting legacy.
          </p>
        </div>
      </section>

      {/* 2. Our Story */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <p className="text-brand-orange font-semibold uppercase tracking-widest mb-3">
            Our Story
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Eleven Founders. One Shared Vision.
          </h2>

          <div className="max-w-4xl space-y-5 text-muted leading-relaxed">
            <p>
              The Founders was established by eleven founding
              members united by a shared belief: that individuals
              can achieve greater economic progress and build
              lasting value when they combine their resources,
              knowledge, ideas and ambitions.
            </p>

            <p>
              What began as a shared vision has grown into an
              organisation built around collective investment,
              enterprise development and long-term wealth creation.
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

            <p className="font-semibold text-brand-blue">
              We believe that what we build together today can
              create lasting value for generations to come.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Vision and Mission */}
      <section className="bg-gray-50 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10">

            {/* Vision */}
            <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-brand-orange">
              <p className="text-brand-orange font-semibold uppercase tracking-widest mb-4">
                Our Vision
              </p>

              <h2 className="text-2xl font-bold mb-5">
                The Future We Envision
              </h2>

              <p className="text-muted leading-relaxed">
                To become a leading and enduring institution that
                transforms collective resources and shared ambitions
                into sustainable enterprises, economic opportunities
                and generational wealth.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-brand-blue">
              <p className="text-brand-blue font-semibold uppercase tracking-widest mb-4">
                Our Mission
              </p>

              <h2 className="text-2xl font-bold mb-5">
                What Drives Our Work
              </h2>

              <p className="text-muted leading-relaxed">
                To mobilise and strategically invest collective
                resources, develop and manage sustainable businesses,
                and create structured opportunities for members to
                participate in shared economic growth through
                collaboration, accountability and responsible
                leadership.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Our Core Values */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-brand-orange font-semibold uppercase tracking-widest mb-3">
              What Guides Us
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-5">
              Our Core Values
            </h2>

            <p className="max-w-2xl mx-auto text-muted leading-relaxed">
              The principles that shape our culture, guide our
              decisions and define how we work together.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Value 1 */}
            <div className="p-7 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold mb-4">
                Integrity & Accountability
              </h3>

              <p className="text-muted leading-relaxed">
                We uphold honesty, ethical conduct and responsibility
                in all our dealings. We remain accountable for our
                decisions, commitments, resources and actions.
              </p>
            </div>

            {/* Value 2 */}
            <div className="p-7 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold mb-4">
                Collaboration & Unity
              </h3>

              <p className="text-muted leading-relaxed">
                We believe collective progress is achieved through
                shared purpose, mutual respect and the active
                participation of members. We value diverse ideas,
                skills and contributions.
              </p>
            </div>

            {/* Value 3 */}
            <div className="p-7 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold mb-4">
                Stewardship & Responsibility
              </h3>

              <p className="text-muted leading-relaxed">
                We recognise that resources entrusted to the
                organisation must be managed prudently, transparently
                and in the best interests of its long-term objectives.
              </p>
            </div>

            {/* Value 4 */}
            <div className="p-7 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold mb-4">
                Entrepreneurial Excellence
              </h3>

              <p className="text-muted leading-relaxed">
                We embrace innovation, strategic thinking and
                calculated risk-taking to identify opportunities,
                develop viable businesses and create sustainable
                economic value.
              </p>
            </div>

            {/* Value 5 */}
            <div className="p-7 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold mb-4">
                Transparency & Good Governance
              </h3>

              <p className="text-muted leading-relaxed">
                We are committed to responsible leadership, sound
                governance, clear communication and transparent
                organisational processes that build trust and
                confidence.
              </p>
            </div>

            {/* Value 6 */}
            <div className="p-7 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold mb-4">
                Sustainability & Legacy
              </h3>

              <p className="text-muted leading-relaxed">
                We pursue decisions and investments that support
                long-term growth, institutional continuity and
                lasting value for present and future generations.
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}