"use client";

import { BatteryCharging, Sun, Zap, Truck } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Battery Solutions",
    icon: BatteryCharging,
    items: [
      "Automotive Batteries",
      "Inverter Batteries",
      "Industrial Batteries",
      "Lithium Batteries",
    ],
    dotColor: "bg-red-500",
  },
  {
    title: "Solar EPC Solutions",
    icon: Sun,
    items: [
      "Residential Solar Installations",
      "Commercial Solar Projects",
      "Industrial Solar Systems",
    ],
    dotColor: "bg-blue-600",
  },
  {
    title: "Power Backup Systems",
    icon: Zap,
    items: ["Inverters", "Stabilizers", "Energy Storage Systems"],
    dotColor: "bg-blue-600",
  },
  {
    title: "Trading & Distribution",
    icon: Truck,
    items: [
      "Multi-brand product sourcing",
      "Bulk supply capabilities",
      "Pan India logistics",
    ],
    dotColor: "bg-red-500",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.12,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#06111f] text-white">
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Logo Side */}
          <motion.div
            initial="hidden"
            animate="show"
            custom={0}
            variants={fadeUp}
            className="flex justify-center lg:justify-start"
          >
            <div className="w-full max-w-[430px]">
              <div className="rounded-[22px] border border-white/10 bg-white/[0.02] p-6 shadow-sm">
                <img
                  src="/infi.jpeg"
                  alt="Anay Infinity Pvt Ltd"
                  className="h-auto w-full object-contain rounded-[14px]"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Hero Text */}
          <div>
            <motion.h1
              initial="hidden"
              animate="show"
              custom={1}
              variants={fadeUp}
              className="text-4xl font-bold tracking-tight text-[#0b43ac] md:text-6xl"
            >
              Services & Products
            </motion.h1>

            <motion.h2
              initial="hidden"
              animate="show"
              custom={2}
              variants={fadeUp}
              className="mt-6 text-2xl font-medium text-red-500 md:text-3xl"
            >
              Built with Power, Precision & Trust
            </motion.h2>

            <motion.p
              initial="hidden"
              animate="show"
              custom={3}
              variants={fadeUp}
              className="mt-8 max-w-xl text-lg leading-9 text-white"
            >
              From advanced battery solutions to solar EPC execution, power
              backup systems, and nationwide distribution, we deliver
              dependable infrastructure with a refined, future-ready approach.
            </motion.p>
          </div>
        </div>

        {/* Service Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 auto-rows-fr">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                custom={index}
                variants={fadeUp}
                className="relative h-full flex flex-col overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.02] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="absolute right-4 top-4 flex items-center">
                  <img
                    src="/infi.jpeg"
                    alt="Anay Infinity logo"
                    className="h-10 w-10 object-cover rounded-[10px] bg-white/5 p-1"
                  />
                </div>
                <div className="p-6 md:p-8 flex-1">
                  <div className="flex items-center gap-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/10 text-blue-100">
                      <Icon className="h-10 w-10 text-blue-100" strokeWidth={2} />
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                      {service.title}
                    </h3>
                  </div>

                  <ul className="mt-8 space-y-4 pl-2">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-4 text-lg text-white"
                      >
                        <span
                          className={`mt-3 h-2.5 w-2.5 rounded-full ${service.dotColor}`}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="h-7 bg-gradient-to-r from-blue-600 via-red-500 to-blue-600" />
              </motion.div>
            );
          })}
        </div>
      </section>
    </main>
  );
}