"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay: i * 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,78,152,0.12),transparent_35%),radial-gradient(circle_at_top_right,rgba(185,28,28,0.10),transparent_30%)]" />
      <div className="container relative py-14 md:py-18 lg:py-20">
        <div className="grid items-stretch gap-4 md:grid-cols-[1.15fr_0.85fr]">
          {/* LEFT CONTENT */}
          <motion.div
            className="flex flex-col justify-center rounded-[30px] border border-white/10 bg-gradient-to-br from-[#071528] via-[#07121b] to-[#07131f] p-6 md:p-8"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <motion.p
              className="text-[11px] uppercase tracking-[0.28em] text-blue-200/70"
              variants={fadeUp}
              custom={0}
            >
              Anay Infinity Pvt Ltd
            </motion.p>

            <motion.h1
              className="mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-[-0.03em] text-white"
              variants={fadeUp}
              custom={1}
            >
              Powering progress.
              <br />
              Built on trust.
            </motion.h1>

            <motion.p
              className="mt-4 max-w-2xl text-base leading-7 text-slate-300 md:text-lg"
              variants={fadeUp}
              custom={2}
            >
              From strong roots in battery distribution to expanding energy,
              infrastructure, and global trade opportunities, we build with
              reliability, scale, and long-term vision.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap gap-3"
              variants={fadeUp}
              custom={3}
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-white/6 px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
              >
                Contact Us
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/5"
              >
                Know More <ArrowRight size={16} />
              </Link>
            </motion.div>

            <motion.div
              className="mt-8 flex flex-wrap gap-6 border-t border-white/10 pt-6"
              variants={fadeUp}
              custom={4}
            >
              <div>
                <div className="text-2xl font-semibold text-white md:text-3xl">
                  20+
                </div>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-300">
                  Years Legacy
                </p>
              </div>

              <div>
                <div className="text-2xl font-semibold text-white md:text-3xl">
                  390+
                </div>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-300">
                  Dealers Network
                </p>
              </div>

              <div>
                <div className="text-2xl font-semibold text-white md:text-3xl">
                  Pan India
                </div>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-300">
                  Reach
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT VISUAL PANEL */}
          <motion.div
            className="grid gap-4"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <motion.div
              className="rounded-[30px] border border-white/10 bg-gradient-to-br from-[#071224] to-[#06111f] p-6 text-white md:p-8"
              variants={fadeUp}
              custom={1}
            >
              <p className="text-[11px] uppercase tracking-[0.24em] text-slate-400">
                Future Ready
              </p>

              <h2 className="mt-3 text-2xl font-semibold leading-tight md:text-3xl">
                Scalable energy and trading solutions for a growing market.
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-300 md:text-base">
                We combine deep market understanding, dependable supply, and
                execution-focused operations to support long-term business
                growth.
              </p>

              <div className="mt-6 h-[1px] w-20 bg-white/30" />

              <p className="mt-4 text-xs uppercase tracking-widest text-slate-400">
                Reliability • Scale • Vision
              </p>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              <motion.div
                className="rounded-[24px] border border-white/10 bg-white/[0.02] px-4 py-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                variants={fadeUp}
                custom={2}
              >
                <p className="text-[11px] uppercase tracking-[0.24em] text-slate-500">
                  Core Focus
                </p>
                <p className="mt-2 text-base font-semibold text-white">
                  Battery, solar and backup systems
                </p>
              </motion.div>

              <motion.div
                className="rounded-[24px] border border-white/10 bg-white/[0.02] px-4 py-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                variants={fadeUp}
                custom={3}
              >
                <p className="text-[11px] uppercase tracking-[0.24em] text-slate-500">
                  Growth
                </p>
                <p className="mt-2 text-base font-semibold text-white">
                  National strength with global ambition
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}