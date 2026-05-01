"use client";

import React, { useState } from "react";
import WhatsAppButton from "../components/WhatsAppButton";

const inputClass =
  "w-full h-[52px] rounded-2xl border border-white/10 bg-white/5 px-4 text-white placeholder:text-slate-400 outline-none transition focus:border-sky-400 focus:bg-white/10 focus:ring-4 focus:ring-sky-400/20";

const textareaClass =
  "w-full min-h-[140px] rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 outline-none transition focus:border-sky-400 focus:bg-white/10 focus:ring-4 focus:ring-sky-400/20";

export default function ContactPage() {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus(null);

    const form = e.currentTarget;

    const data = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      company: form.company.value,
      message: form.message.value,
    };

    try {
      setLoading(true);

      const res = await fetch("/api/resend", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const contentType = res.headers.get("content-type");

      if (!contentType || !contentType.includes("application/json")) {
        const text = await res.text();
        console.error("HTML response:", text);
        throw new Error("API route is returning HTML. Fix backend route.");
      }

      const result = await res.json();

      if (!res.ok) {
        const errorMessage =
          typeof result.error === "string"
            ? result.error
            : result.error?.message
            ? result.error.message
            : JSON.stringify(result.error);

        throw new Error(errorMessage || "Something went wrong");
      }

      setStatus({
        type: "success",
        message: result.message || "Message sent successfully!",
      });

      form.reset();
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Failed to send message.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.12),transparent_40%),radial-gradient(circle_at_top_right,rgba(239,68,68,0.10),transparent_40%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-20">
          <p className="text-xs uppercase tracking-[0.3em] text-sky-400">
            Contact Us
          </p>

          <h1 className="mt-4 text-4xl font-bold md:text-6xl">
            Let’s Build Something
            <span className="block bg-gradient-to-r from-sky-400 to-red-400 bg-clip-text text-transparent">
              Powerful Together
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-slate-400">
            Battery solutions, solar EPC, exports or partnerships — connect with
            our team and take your business forward.
          </p>
        </div>
      </section>

      {/* FORM + DETAILS */}
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-2">
        {/* FORM */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
          <h2 className="mb-6 text-2xl font-semibold">Send a Message</h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
              <input name="name" placeholder="Your Name" required className={inputClass} />
              <input name="email" type="email" placeholder="Email" required className={inputClass} />
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <input name="phone" placeholder="Phone" className={inputClass} />
              <input name="company" placeholder="Company / Country" className={inputClass} />
            </div>

            <textarea name="message" placeholder="Your Requirement" required className={textareaClass} />

            <button
              type="submit"
              disabled={loading}
              className="h-14 w-full rounded-2xl bg-gradient-to-r from-sky-500 to-red-500 font-semibold text-white transition hover:scale-[1.02] disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          {status && (
            <div
              className={`mt-5 rounded-xl p-4 text-sm ${
                status.type === "success"
                  ? "bg-green-500/10 text-green-400"
                  : "bg-red-500/10 text-red-400"
              }`}
            >
              {status.message}
            </div>
          )}
        </div>

        {/* CONTACT INFO */}
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-black p-8 shadow-[0_30px_80px_rgba(0,0,0,0.7)]">
          <h3 className="mb-6 text-xl font-semibold">Contact Details</h3>

          <div className="space-y-6 text-slate-300">
            <div>
              <p className="text-xs text-slate-500">Location</p>
              <p className="text-white">Jodhpur, Rajasthan, India</p>
            </div>

            <div>
              <p className="text-xs text-slate-500">Email</p>
              <p className="text-sky-400">ansh@anayinfinity.com</p>
            </div>

            <div>
              <p className="text-xs text-slate-500">Phone</p>
              <p className="text-white">+91 94688 49961</p>
              <p className="text-white">+91 79764 07676</p>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </main>
  );
}