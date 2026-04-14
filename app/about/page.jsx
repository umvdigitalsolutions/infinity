export default function AboutPage() {
  const stats = [
    { value: "2002", label: "Established" },
    { value: "100+", label: "Trusted Dealers" },
    { value: "Pan India", label: "Network" },
    { value: "Global", label: "Expansion Vision" },
  ];

  const timeline = [
    {
      year: "2002",
      title: "The Beginning",
      desc: "The foundation was laid in Jodhpur through Ansh Batteries with a strong focus on trust, long-term relationships, and dependable service.",
    },
    {
      year: "2010+",
      title: "Expansion",
      desc: "The business expanded its dealer network, strengthened operational capacity, and built a broader market presence across regions.",
    },
    {
      year: "2020+",
      title: "Diversification",
      desc: "The company entered solar EPC, power backup, and wider energy-led opportunities with a future-facing business outlook.",
    },
    {
      year: "Today",
      title: "Anay Infinity Pvt Ltd",
      desc: "A modern enterprise built on legacy, scaling nationally and preparing for strategic global expansion.",
    },
  ];

  return (
    <main className="bg-[#06111f] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,78,152,0.18),transparent_35%),radial-gradient(circle_at_top_right,rgba(185,28,28,0.14),transparent_30%)]" />
        <div className="container relative py-16 md:py-24">
          <div className="max-w-5xl">
            <p className="text-[11px] uppercase tracking-[0.32em] text-blue-200/70">
              About Anay Infinity Pvt Ltd
            </p>

            <h1 className="mt-5 text-4xl font-semibold leading-[1.02] tracking-[-0.04em] md:text-6xl lg:text-7xl">
              Built on legacy.
              <br />
              Powered for the future.
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-7 text-slate-300 md:text-lg md:leading-8">
              Anay Infinity Pvt Ltd is built on the strong foundation of{" "}
              <span className="font-semibold text-white">Ansh Batteries</span>,
              established in 2002 in Jodhpur. What began as a trusted regional
              business has grown into a forward-looking enterprise serving
              customers across India with vision, reliability, and scale.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-100">
                Legacy Since 2002
              </span>
              <span className="rounded-full border border-red-400/30 bg-red-500/10 px-4 py-2 text-sm text-red-100">
                National Presence
              </span>
              <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200">
                Global Expansion Vision
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE SECTION */}
      <section className="border-b border-white/10">
        <div className="container py-8 md:py-10">
          <div className="grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
            <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#071528] via-[#07121b] to-[#06111f] p-6 md:p-8">
              <div className="absolute inset-0 opacity-85 bg-[radial-gradient(circle_at_top_left,rgba(6,78,152,0.20),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(185,28,28,0.14),transparent_30%)]" />
              <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(120deg,transparent,white,transparent)] translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

              <div className="relative max-w-2xl">
                <p className="text-[11px] uppercase tracking-[0.28em] text-blue-200/70">
                  Corporate Legacy
                </p>

                <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">
                  From Jodhpur roots to a trusted national presence.
                </h2>

                <p className="mt-5 text-sm leading-7 text-slate-300 md:text-base">
                  Built through consistency, trust, and strong market
                  relationships, Anay Infinity continues to evolve across
                  batteries, energy solutions, infrastructure opportunities, and
                  future global trade expansion.
                </p>

                <div className="mt-6 h-px w-24 bg-gradient-to-r from-blue-400/60 via-red-400/40 to-transparent" />

                <p className="mt-4 text-xs uppercase tracking-[0.28em] text-slate-400">
                  Since 2002 • Reliability • Growth
                </p>
              </div>
            </div>

            <div className="grid gap-5">
              <div className="rounded-[26px] border border-blue-400/15 bg-white/5/5 p-4 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-blue-500/10">
                <p className="text-[11px] uppercase tracking-[0.24em] text-blue-200/70">
                  Focus
                </p>
                <p className="mt-3 text-lg font-semibold text-white">
                  Energy, power and infrastructure solutions
                </p>
              </div>

              <div className="rounded-[26px] border border-red-400/15 bg-white/5 p-4 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-red-400/30 hover:bg-red-500/10">
                <p className="text-[11px] uppercase tracking-[0.24em] text-red-200/70">
                  Strength
                </p>
                <p className="mt-3 text-lg font-semibold text-white">
                  Trust built over decades of business relationships
                </p>
              </div>

              <div className="rounded-[26px] border border-white/10 bg-gradient-to-br from-[#14213d] to-[#0b1220] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20">
                <p className="text-[11px] uppercase tracking-[0.24em] text-slate-400">
                  Vision
                </p>
                <p className="mt-3 text-lg font-semibold text-white">
                  Scalable, premium and future-ready growth
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-white/10">
        <div className="container py-10">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]"
              >
                <div className="bg-gradient-to-r from-blue-300 via-white to-red-300 bg-clip-text text-2xl font-semibold text-transparent md:text-3xl">
                  {item.value}
                </div>
                <div className="mt-2 text-[11px] uppercase tracking-[0.22em] text-slate-400">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section>
        <div className="container py-14 md:py-16">
          <div className="max-w-2xl">
            <p className="text-[11px] uppercase tracking-[0.28em] text-blue-200/70">
              Our Journey
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] md:text-5xl">
              Growth shaped by trust, scale and vision.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {timeline.map((item) => (
              <div
                key={item.year}
                className="group rounded-[24px] border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-400/20 hover:bg-white/[0.05]"
              >
                <div className="text-xs font-medium uppercase tracking-[0.25em] text-slate-400">
                  {item.year}
                </div>
                <h3 className="mt-3 text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.desc}
                </p>
                <div className="mt-5 h-px w-full bg-gradient-to-r from-blue-500/40 via-red-500/30 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}