"use client";

import { useState } from "react";
import Link from "next/link";
import Hero from "./components/Hero";
import ProductModal from "./components/ProductModal";
import {
  BatteryCharging,
  SunMedium,
  ShieldCheck,
  Globe2,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const businessVerticals = [
  {
    title: "Battery Distribution",
    description:
      "Reliable supply of multi-brand batteries across automotive, inverter, and industrial applications.",
    icon: BatteryCharging,
    products: [
      {
        name: "Automotive Batteries",
        image: "/automotive.png",
          brands: [
          { name: "Exide", image: "/exide.jpg" },
          { name: "Amaron", image: "/amaron.png" },
          { name: "Okaya", image: "/okaya.jpg" },
          { name: "SF Sonic", image: "/sf.jpeg" },
        ],
      },
      {
        name: "Inverter Batteries",
        image: "/inverter.png",
        brands: [
          { name: "Luminous", image: "/LUMINOUS.jpg" },
          { name: "Microtek", image: "/microtek.jpg" },
          { name: "Amaron Inverter", image: "/amaroninverter.jpg" },
        ],
      },
      {
        name: "Industrial Batteries",
        image: "/industrial.png",
        brands: [
          { name: "HBL", image: "/hbl.png" },
          { name: "Exide Industrial", image: "/exideindustrial.png" },
          { name: "Okaya Industrial", image: "/okayaindustrial.png" },
        ],
      },
      {
        name: "Maintenance Kits",
        image: "/maintenance.png",
        brands: [
          { name: "Installation", image: "https://via.placeholder.com/80?text=Install" },
          { name: "Service Plans", image: "https://via.placeholder.com/80?text=Service" },
        ],
      },
    ],
  },
  {
    title: "Solar EPC & Energy Solutions",
    description:
      "End-to-end solar solutions for residential, commercial, and industrial needs.",
    icon: SunMedium,
    products: ["Solar Panels", "Inverters", "Mounting Systems", "BOS Components"],
  },
  {
    title: "Power Backup Systems",
    description:
      "Complete backup solutions including inverters, stabilizers, and advanced energy systems.",
    icon: ShieldCheck,
    products: [
      { name: "Lithium-ion Batteries For Two Wheelers", image: "https://via.placeholder.com/80?text=TwoWheeler" },
      { name: "Lithium-ion Batteries For Three Wheelers (L3)", image: "https://via.placeholder.com/80?text=L3" },
      { name: "Lithium-ion Batteries For Three Wheelers (L5)", image: "https://via.placeholder.com/80?text=L5" },
      { name: "Lithium-ion Batteries For E-Tractor", image: "https://via.placeholder.com/80?text=E-Tractor" },
      { name: "Lithium-ion Batteries For Golf Carts", image: "https://via.placeholder.com/80?text=GolfCart" },
      { name: "Lithium-ion Batteries For Electric Drones", image: "https://via.placeholder.com/80?text=Drone" },
      { name: "Lithium-ion Batteries For E-Cleaning Machine", image: "https://via.placeholder.com/80?text=Cleaning" },
      { name: "Lithium-ion Batteries For Electric Forklift", image: "https://via.placeholder.com/80?text=Forklift" },
      { name: "Lithium-ion Batteries For Electric Cycles", image: "https://via.placeholder.com/80?text=E-Cycle" },
      { name: "Inverters", image: "https://via.placeholder.com/80?text=Inverter" },
      { name: "UPS Systems", image: "https://via.placeholder.com/80?text=UPS" },
      { name: "Inverter Batteries", image: "https://via.placeholder.com/80?text=Battery" },
    ],
  },
  {
    title: "Global Exports & Trading",
    description:
      "Expanding into international markets with high-quality Indian products and sourcing solutions.",
    icon: Globe2,
    products: ["Export Logistics", "Sourcing Services", "Custom Shipments"],
  },
];

const reasons = [
  "Legacy You Can Trust – 20+ years of proven experience",
  "Strong Distribution Network – Pan India reach with 390+ dealers",
  "Multi-Brand Expertise – Diverse product portfolio",
  "Scalable Operations – Ready for bulk and global demand",
  "Customer-Centric Approach – Reliable service and long-term relationships",
  "Execution-Driven Team – Focused on timely delivery and support",
];

const stats = [
  { value: "20+", label: "Years of Experience" },
  { value: "390+", label: "Dealers Network" },
  { value: "4", label: "Core Business Verticals" },
  { value: "Pan India", label: "Operational Reach" },
];

export default function Home() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  return (
    <main className="bg-[#06111f] text-white">
      <Hero />

      {/* STATS */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-6 rounded-3xl border border-slate-200 bg-gradient-to-r from-blue-500/10 via-blue-500/20 to-red-500/10 p-8 shadow-sm md:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="md:text-left text-center">
              <div className="text-3xl font-bold tracking-tight text-white">
                {item.value}
              </div>
              <p className="mt-2 text-sm text-slate-300">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BUSINESS VERTICALS */}
      <section className="mx-auto max-w-7xl px-6 pb-16 md:pb-20">
        <div className="max-w-2xl">
          <span className="inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1 text-sm font-medium text-blue-100">
            Our Expertise
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            Our Business Verticals
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-300 text-justify">
            We deliver dependable solutions across energy distribution, solar
            infrastructure, power backup, and international trade.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {businessVerticals.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-100 transition duration-300 hover:bg-red-500/10 hover:text-red-300">
                  <Icon size={26} />
                </div>

                <h3 className="mt-5 text-xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.description}
                </p>

                <button
                  onClick={() => {
                    setSelected(item);
                    setOpen(true);
                  }}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-blue-100 transition hover:text-red-400"
                >
                  Learn More <ArrowRight size={16} />
                </button>
              </div>
            );
          })}
        </div>
      </section>

      <ProductModal open={open} onClose={() => setOpen(false)} item={selected} />

      {/* FEATURE / WHY SECTION */}
      <section className="mx-auto max-w-7xl px-6 pb-16 md:pb-20">
        <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 shadow-sm">
            <p className="text-sm font-medium text-blue-100">
              Why Choose Anay Infinity
            </p>

            <h2 className="mt-3 text-2xl font-bold md:text-3xl">
              Strength, scale and reliability
            </h2>

            <p className="mt-4 text-slate-300 leading-7 text-justify">
              Built on trust, experience, and scalable infrastructure, we serve
              our customers with dependable products, execution strength, and a
              long-term business approach.
            </p>

            <div className="mt-4 h-[2px] w-20 bg-gradient-to-r from-blue-400/80 via-red-400/60 to-transparent" />

            <p className="mt-3 text-xs uppercase tracking-wide text-slate-500">
              Trusted legacy • scalable future
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div
                key={reason}
                className="flex items-start gap-3 rounded-3xl border border-white/10 bg-white/[0.02] p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <CheckCircle2 className="mt-0.5 text-red-400" size={18} />
                <p className="text-sm leading-6 text-slate-300">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-[2rem] border border-slate-200 bg-slate-900 px-6 py-12 text-white shadow-xl md:px-12 md:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1 text-sm font-medium text-white/90">
              Let’s Build Together
            </p>

            <h3 className="mt-5 text-3xl font-bold md:text-4xl">
              Looking for a reliable growth partner?
            </h3>

            <p className="mt-4 text-sm leading-7 text-white/70 md:text-base text-justify">
              We deliver power, reliability, and scalable business solutions
              built for long-term value.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#0b43ac] transition hover:bg-blue-50"
              >
                Contact Us
              </Link>

              <Link
                href="/about"
                className="rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Know More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}