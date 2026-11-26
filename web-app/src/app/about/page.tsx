
export default function AboutPage() {
  return (
    <main>
      {/* About page hero */}
      <section className="bg-navy px-6 py-20 text-white">
        <div className="max-w-6xl mx-auto">
          <p className="mb-4 font-semibold uppercase tracking-widest text-gold">
            Who We Are
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Building Together.
            <br />
            Growing Together.
          </h1>

          <p className="max-w-2xl text-lg text-white/85 leading-relaxed">
            The Founders is a collective investment and enterprise
            organisation built on collaboration, shared resources,
            entrepreneurship and sustainable growth.
          </p>
        </div>
      </section>

      {/* About the organisation */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            About The Founders
          </h2>

          <p className="max-w-3xl leading-relaxed text-muted">
            We bring people, ideas and financial resources together
            to create opportunities, develop businesses and build
            long-term value through collective effort.
          </p>
        </div>
      </section>
    </main>
  );
}
