"use client";

import { useState } from "react";
import {
  BatteryCharging,
  SunMedium,
  Globe2,
  Zap,
  CheckCircle2,
  X,
} from "lucide-react";

const services = [
  {
    title: "Battery Distribution",
    icon: BatteryCharging,
    description:
      "Reliable multi-brand battery supply including automotive, inverter, industrial, UPS and storage solutions.",
    products: [
      {
        name: "Automotive Batteries",
        image: "/automotive.png",
        brands: ["Exide", "Amaron", "Okaya", "SF Sonic"],
      },
      {
        name: "Inverter Batteries",
        image: "/inverter.png",
        brands: ["Luminous", "Microtek", "Amaron Inverter"],
      },
      {
        name: "Industrial Batteries",
        image: "/industrial.png",
        brands: ["HBL", "Exide Industrial", "Okaya Industrial"],
      },
      {
        name: "UPS Systems",
        image: "/ups.png",
        brands: ["Home UPS", "Commercial UPS", "Industrial UPS"],
      },
      {
        name: "Energy Storage Systems",
        image: "/energy.png",
        brands: ["Backup Storage", "Hybrid Storage", "Power Storage"],
      },
      {
        name: "Maintenance Kits",
        image: "/maintenance.png",
        brands: ["Installation", "Service Plans"],
      },
    ],
  },
  {
    title: "Solar EPC & Energy Solutions",
    icon: SunMedium,
    description:
      "End-to-end solar EPC solutions for residential, commercial and industrial energy needs.",
    products: [
      {
        name: "Solar Panels",
        image: "/solar.png",
        brands: ["Residential", "Commercial", "Industrial"],
      },
      {
        name: "Mounting Systems",
        image: "/mounting.png",
        brands: ["Rooftop", "Ground Mounted", "Custom Structures"],
      },
      {
        name: "BOS Components",
        image: "/bos.png",
        brands: ["Cables", "Connectors", "Protection Systems"],
      },
    ],
  },
  {
    title: "Lithium-ion Battery Solutions",
    icon: Zap,
    description:
      "Advanced lithium-ion batteries for electric mobility and industrial applications.",
    products: [
      {
        name: "Two Wheeler Batteries",
        image: "/nexvolt5.jpeg",
        brands: ["Electric Scooters", "Electric Bikes"],
        gallery: ["/nexvolt5.jpeg"],
      },
      {
        name: "Three Wheeler Batteries",
        image: "/nexvolt3 (1).jpeg",
        brands: ["L3 Segment", "L5 Segment"],
        gallery: ["/nexvolt3 (1).jpeg"],
      },
      {
        name: "Special Application Batteries",
        image: "/nexvolt1.png",
        brands: ["Golf Carts", "Drones", "Forklifts"],
        gallery: ["/nexvolt1.png", "/nexvolt2.png"],
      },
    ],
  },
  {
    title: "Global Exports & Trading",
    icon: Globe2,
    description:
      "International sourcing, export logistics and trading solutions with dependable execution.",
    products: [
      {
        name: "Export Logistics",
        image: "/export.png",
        brands: ["Documentation", "Dispatch", "Handling"],
      },
      {
        name: "Sourcing Services",
        image: "/sourcing.png",
        brands: ["Bulk Supply", "Vendor Network", "Quality Check"],
      },
      {
        name: "Custom Shipments",
        image: "/custom.png",
        brands: ["Domestic", "International", "Project Based"],
      },
    ],
  },
];

export default function ServicesPage() {
  const [activeImages, setActiveImages] = useState(null);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#06111f] text-white">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-120px] top-[-180px] h-[520px] w-[520px] rounded-full bg-blue-600/20 blur-[130px]" />
        <div className="absolute bottom-[-180px] right-[-120px] h-[520px] w-[520px] rounded-full bg-red-600/20 blur-[130px]" />
      </div>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <p className="inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1 text-sm font-medium text-blue-100">
          Services & Products
        </p>

        <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
          Reliable Battery, Solar & Trading Solutions
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
          Powering businesses with dependable battery distribution, solar EPC,
          lithium-ion applications and global trading support.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-10">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 md:p-8"
              >
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-r from-blue-500/10 via-transparent to-red-500/10 opacity-0 blur-xl transition duration-500 group-hover:opacity-100" />

                <div className="relative">
                  <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                    <div className="flex items-start gap-5">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-red-500/20 text-white shadow-lg">
                        <Icon size={28} />
                      </div>

                      <div>
                        <h2 className="text-2xl font-bold md:text-3xl">
                          {service.title}
                        </h2>

                        <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-300">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {service.products.map((product) => (
                      <div
                        key={product.name}
                        onClick={() =>
                          product.gallery && setActiveImages(product.gallery)
                        }
                        className={`rounded-3xl border border-white/10 bg-[#06111f]/70 p-5 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.06] ${
                          product.gallery ? "cursor-pointer" : ""
                        }`}
                      >
                        <div className="flex h-36 items-center justify-center overflow-hidden rounded-2xl bg-white/5 p-4">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="max-h-full max-w-full object-contain"
                          />
                        </div>

                        <h3 className="mt-5 text-lg font-semibold text-white">
                          {product.name}
                        </h3>

                        <div className="mt-4 space-y-2">
                          {product.brands.map((brand) => (
                            <div
                              key={brand}
                              className="flex items-center gap-2 text-sm text-slate-300"
                            >
                              <CheckCircle2
                                size={15}
                                className="shrink-0 text-red-400"
                              />
                              <span>{brand}</span>
                            </div>
                          ))}
                        </div>

                        {product.gallery && (
                          <p className="mt-4 text-xs font-medium text-blue-300">
                            Click to view product
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {activeImages && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 px-4 backdrop-blur-md">
          <button
            onClick={() => setActiveImages(null)}
            className="absolute right-6 top-6 rounded-full border border-white/20 bg-white/10 p-3 text-white transition hover:bg-white/20"
          >
            <X size={22} />
          </button>

          <div className="flex max-h-[85vh] max-w-6xl gap-6 overflow-x-auto rounded-3xl border border-white/10 bg-[#06111f]/80 p-6 shadow-2xl">
            {activeImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Nexvolt Battery ${index + 1}`}
                className="max-h-[70vh] min-w-[280px] rounded-2xl object-contain shadow-2xl"
              />
            ))}
          </div>
        </div>
      )}
    </main>
  );
}