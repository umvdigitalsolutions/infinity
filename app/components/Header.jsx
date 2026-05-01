"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Exports", href: "/export" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 relative border-b border-white/10 bg-[#06111f]/90 backdrop-blur-xl text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-center gap-4 h-16 md:h-[84px] justify-between">
          {/* LOGO */}
          <Link href="/" className="flex min-w-0 items-center gap-4">
            <div className="relative h-10 w-10 md:h-14 md:w-14 shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <Image
                src="/infi.jpeg"
                alt="Anay Infinity Pvt Ltd Logo"
                fill
                sizes="(max-width: 767px) 40px, 56px"
                priority
                className="object-contain p-1.5"
              />
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="truncate text-sm font-semibold leading-none tracking-[0.08em] text-white md:text-[1.18rem]">
                  ANAY INFINITY
                </span>
                <span className="hidden md:inline-block rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-semibold tracking-[0.18em] text-slate-200">
                  PVT. LTD.
                </span>
              </div>

              <p className="mt-1 hidden md:block text-[10px] uppercase tracking-[0.26em] text-slate-300 md:text-[11px]">
                Legacy Driven. Globally Expanding.
              </p>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-2 md:flex">
            <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-full px-3 py-2 text-sm font-medium text-slate-200 transition-all duration-300 hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <Link
              href="/contact"
              className="ml-3 inline-flex items-center justify-center rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20"
            >
              Request Quote
            </Link>
          </nav>

          {/* MOBILE BUTTON */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen(!menuOpen)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10 md:hidden"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              {menuOpen ? (
                <path
                  d="M6 6L18 18M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7H20M4 12H20M4 17H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`absolute left-0 right-0 top-full z-40 transition-all duration-300 md:hidden flex justify-center ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="w-full max-w-full px-4">
          <div className="mx-auto max-w-3xl rounded-[18px] bg-[#06111f] bg-opacity-95 border border-white/10 p-2">
            <div className="flex flex-col max-h-[70vh] overflow-auto">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block w-full rounded-md px-4 py-3 text-base font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}

              <div className="px-3 py-3">
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center rounded-full bg-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/20"
                >
                  Request Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}