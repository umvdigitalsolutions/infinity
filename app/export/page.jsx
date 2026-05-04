"use client";

export default function ExportLanding() {
  return (
    <main className="relative min-h-screen bg-[#06111f] text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-120px] top-[-180px] h-[520px] w-[520px] rounded-full bg-blue-600/20 blur-[140px]" />
        <div className="absolute bottom-[-180px] right-[-120px] h-[520px] w-[520px] rounded-full bg-red-600/20 blur-[140px]" />
      </div>

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-4xl">
          Your Trusted Export Partner from India
        </h1>

        <p className="mt-6 text-slate-300 max-w-2xl text-lg leading-8">
          Supplying high-quality products with reliable sourcing,
          competitive pricing, and seamless global logistics.
        </p>
      </section>

      {/* GRID SECTION */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid gap-8 md:grid-cols-2">
          
          {/* WHAT WE EXPORT */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-xl">
            <h3 className="text-xl font-semibold">What We Export</h3>

            <ul className="mt-4 space-y-3 text-slate-300">
              <li>• Batteries & Energy Products</li>
              <li>• Home Décor & Handicrafts</li>
              <li>• Agro & Processed Products</li>
              <li>• Industrial & Trading Commodities</li>
            </ul>
          </div>

          {/* WHY CHOOSE US */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-xl">
            <h3 className="text-xl font-semibold">
              Why Global Buyers Choose Us
            </h3>

            <ul className="mt-4 space-y-3 text-slate-300">
              <li>• Strong sourcing network across India</li>
              <li>• Competitive pricing with quality assurance</li>
              <li>• Private label & customization available</li>
              <li>• Export-ready documentation & supply chain</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <h3 className="text-2xl md:text-3xl font-semibold">
          Our Capabilities
        </h3>

        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            "Bulk order fulfillment",
            "Multi-product sourcing",
            "Container load management",
            "Long-term supply partnerships",
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-xl border border-white/10 bg-white/5 p-5 text-slate-300 hover:bg-white/10 transition"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <h3 className="text-2xl md:text-3xl font-semibold">
          Export Process
        </h3>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            "Requirement Understanding",
            "Product Sourcing & Sampling",
            "Pricing & Negotiation",
            "Quality Check",
            "Packaging & Dispatch",
            "Shipping & Documentation",
          ].map((step, i) => (
            <div
              key={i}
              className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-5 text-slate-300"
            >
              <span className="text-blue-400 font-bold text-lg">
                {i + 1}
              </span>
              {step}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-16 text-center">
        <h3 className="text-2xl md:text-3xl font-semibold">
          Ready to Export with Confidence?
        </h3>

        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a
            href="/contact"
            className="rounded-full bg-gradient-to-r from-blue-600 to-red-500 px-8 py-3 font-medium text-white shadow-lg hover:opacity-90 transition"
          >
            Request Quote
          </a>

          <a
            href="/contact"
            className="rounded-full border border-white/20 px-8 py-3 font-medium text-white hover:bg-white/10 transition"
          >
            Schedule a Call
          </a>
        </div>
      </section>
    </main>
  );
}