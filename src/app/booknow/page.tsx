"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

// ─── Service options ───────────────────────────────────────────
const SERVICES = [
  "Home Cleaning",
  "Office Cleaning",
  "Deep Cleaning",
  "Move-in / Move-out Cleaning",
  "End of Lease / Bond Cleaning",
  "Bathroom Deep Clean",
  "Kitchen Detailing",
  "Other",
];

const PROPERTY_SIZES = [
  "Studio / 1 Bedroom",
  "2 Bedrooms",
  "3 Bedrooms",
  "4+ Bedrooms",
  "Small Office",
  "Large Office / Commercial",
  "Other",
];

const TIME_SLOTS = [
  "7:00 AM",
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
];

// ─── Trust badges ──────────────────────────────────────────────
const TRUST_ITEMS = [
  { icon: "✔", text: "Trusted by 100+ clients" },
  { icon: "✔", text: "Eco-friendly cleaning products" },
  { icon: "✔", text: "Affordable & transparent pricing" },
  { icon: "✔", text: "Background-checked professionals" },
];

// ─── Fade-up animation variant ─────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export default function BookNowPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<"success" | "error" | null>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  // ── Handle form submit via Web3Forms ──────────────────────────
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult(null);

    try {
      const formData = new FormData(e.currentTarget);

      // Web3Forms access key
      formData.append("access_key", "71e54368-6fb8-4c5b-aa46-f34e344d8e22");
      formData.append("subject", "New Booking Request - Rani Delight Services");
      formData.append("from_name", "Rani Delight Website");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setResult("error");
      }
    } catch {
      setResult("error");
    } finally {
      setIsSubmitting(false);
      // Smooth scroll to result message
      setTimeout(() => {
        resultRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 100);
    }
  };

  // ── Shared input styles ───────────────────────────────────────
  const inputBase =
    "w-full bg-white/60 backdrop-blur-sm border border-slate-200 rounded-xl px-4 py-3.5 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-400 transition-all duration-300 text-[15px]";

  const labelBase = "block text-sm font-medium text-slate-700 mb-1.5";

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* ───────────── Hero Section ───────────── */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 px-6 overflow-hidden">
        {/* Decorative gradient blobs */}
        <div className="absolute top-20 -left-32 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 -right-32 w-80 h-80 bg-blue-50/60 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-blue-600 text-sm font-semibold tracking-widest uppercase mb-4"
          >
            Book Your Service
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-tight mb-6"
          >
            Schedule Your Cleaning <br className="hidden md:block" />
            <span className="text-blue-600">in Just 1 Minute</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-500 text-lg md:text-xl font-light max-w-xl mx-auto mb-10"
          >
            Fill out the form below and our team will get back to you within hours to confirm your appointment.
          </motion.p>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-x-6 gap-y-3"
          >
            {TRUST_ITEMS.map((item) => (
              <span
                key={item.text}
                className="flex items-center gap-2 text-slate-600 text-sm font-medium"
              >
                <span className="text-blue-600 text-base">{item.icon}</span>
                {item.text}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ───────────── Booking Form ───────────── */}
      <section className="pb-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto"
        >
          {/* Glass card */}
          <div className="relative bg-white/70 backdrop-blur-xl border border-slate-200/80 rounded-3xl shadow-xl shadow-slate-200/40 p-8 md:p-12">
            {/* Subtle glow accent */}
            <div className="absolute -top-px left-1/2 -translate-x-1/2 w-1/3 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full" />

            <form onSubmit={onSubmit} className="space-y-7">
              {/* Hidden fields for Web3Forms */}
              <input type="hidden" name="from_name" value="Rani Delight Website" />

              {/* ── Row 1: Name + Phone ── */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <label htmlFor="name" className={labelBase}>
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="John Smith"
                    className={inputBase}
                  />
                </motion.div>

                <motion.div custom={1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <label htmlFor="phone" className={labelBase}>
                    Phone Number <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="+61 4XX XXX XXX"
                    className={inputBase}
                  />
                </motion.div>
              </div>

              {/* ── Row 2: Email ── */}
              <motion.div custom={2} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <label htmlFor="email" className={labelBase}>
                  Email Address <span className="text-red-400">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className={inputBase}
                />
              </motion.div>

              {/* ── Row 3: Service + Property Size ── */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div custom={3} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <label htmlFor="service" className={labelBase}>
                    Service Type <span className="text-red-400">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className={`${inputBase} appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%2394a3b8%22%20d%3D%22M6%208L1%203h10z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_1rem_center]`}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {SERVICES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </motion.div>

                <motion.div custom={4} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <label htmlFor="property_size" className={labelBase}>
                    Property Size
                  </label>
                  <select
                    id="property_size"
                    name="property_size"
                    className={`${inputBase} appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%2394a3b8%22%20d%3D%22M6%208L1%203h10z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_1rem_center]`}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select size
                    </option>
                    {PROPERTY_SIZES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </motion.div>
              </div>

              {/* ── Row 4: Date + Time ── */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div custom={5} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <label htmlFor="date" className={labelBase}>
                    Preferred Date <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    required
                    className={inputBase}
                  />
                </motion.div>

                <motion.div custom={6} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <label htmlFor="time" className={labelBase}>
                    Preferred Time
                  </label>
                  <select
                    id="time"
                    name="time"
                    className={`${inputBase} appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%2394a3b8%22%20d%3D%22M6%208L1%203h10z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_1rem_center]`}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select time
                    </option>
                    {TIME_SLOTS.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </motion.div>
              </div>

              {/* ── Row 5: Address ── */}
              <motion.div custom={7} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <label htmlFor="address" className={labelBase}>
                  Address <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="address"
                  name="address"
                  required
                  rows={3}
                  placeholder="Enter your full address including suburb and postcode"
                  className={`${inputBase} resize-none`}
                />
              </motion.div>

              {/* ── Row 6: Notes ── */}
              <motion.div custom={8} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <label htmlFor="notes" className={labelBase}>
                  Additional Notes <span className="text-slate-400 font-normal">(optional)</span>
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={3}
                  placeholder="Any special requests or instructions..."
                  className={`${inputBase} resize-none`}
                />
              </motion.div>

              {/* ── Submit Button ── */}
              <motion.div custom={9} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold text-lg py-4 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 active:scale-[0.98] disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      {/* Spinner */}
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Submit Booking Request"
                  )}
                </button>
              </motion.div>

              {/* ── Result Message ── */}
              <div ref={resultRef}>
                {result === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-50 border border-green-200 text-green-700 rounded-xl px-6 py-4 text-center text-[15px] font-medium"
                  >
                     Booking request sent successfully! We will contact you soon.
                  </motion.div>
                )}
                {result === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-50 border border-red-200 text-red-600 rounded-xl px-6 py-4 text-center text-[15px] font-medium"
                  >
                     Something went wrong. Please try again or contact us on WhatsApp.
                  </motion.div>
                )}
              </div>
            </form>
          </div>

          {/* ── Extra info below form ── */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-10 text-center"
          >
            <p className="text-slate-400 text-sm">
              Prefer to talk? Call us at{" "}
              <a href="tel:+61478815629" className="text-blue-600 hover:underline font-medium">
                +61 478 815 629
              </a>{" "}
              or{" "}
              <a
                href="https://wa.me/61478815629"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:underline font-medium"
              >
                WhatsApp us
              </a>
            </p>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}