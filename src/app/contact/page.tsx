"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

// ─── Contact card data ─────────────────────────────────────────
const CONTACT_CARDS = [
  {
    title: "Call Us",
    description: "Speak directly with our team",
    href: "tel:+61478815629",
    value: "+61 478 815 629",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "WhatsApp",
    description: "Chat with us instantly",
    href: "https://wa.me/61478815629",
    value: "Send a Message",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    color: "bg-green-50 text-green-600",
  },
  {
    title: "Email Us",
    description: "We reply within 24 hours",
    href: "mailto:ranidelightservices@gmail.com",
    value: "ranidelightservices@gmail.com",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    color: "bg-purple-50 text-purple-600",
  },
  {
    title: "Visit Us",
    description: "Our service area",
    href: "https://maps.google.com/?q=36+Cowper+St+Parramatta+NSW+2150",
    value: "Parramatta & Greater Sydney",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    color: "bg-orange-50 text-orange-600",
  },
];

// ─── Subject options ───────────────────────────────────────────
const SUBJECTS = [
  "General Inquiry",
  "Request a Quote",
  "Booking Assistance",
  "Feedback / Complaint",
  "Partnership / Business",
  "Other",
];

// ─── Trust items ───────────────────────────────────────────────
const TRUST_ITEMS = [
  {
    text: "Quick response within 24 hours",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "bg-blue-50 text-blue-600",
  },
  {
    text: "Trusted cleaning professionals",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    color: "bg-green-50 text-green-600",
  },
  {
    text: "Affordable & reliable service",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
    color: "bg-amber-50 text-amber-600",
  },
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<"success" | "error" | null>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult(null);

    try {
      const formData = new FormData(e.currentTarget);
      formData.append("access_key", "71e54368-6fb8-4c5b-aa46-f34e344d8e22");
      formData.append("subject", "New Contact Message - Rani Delight Services");
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
      setTimeout(() => {
        resultRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 100);
    }
  };

  const inputBase =
    "w-full bg-white/60 backdrop-blur-sm border border-slate-200 rounded-xl px-4 py-3.5 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-400 transition-all duration-300 text-[15px]";
  const labelBase = "block text-sm font-medium text-slate-700 mb-1.5";

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* ───────── Hero ───────── */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 px-6 overflow-hidden">
        <div className="absolute top-20 -right-40 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 -left-32 w-80 h-80 bg-purple-50/50 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-blue-600 text-sm font-semibold tracking-widest uppercase mb-4"
          >
            Contact Us
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-tight mb-6"
          >
            Get in <span className="text-blue-600">Touch</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-500 text-lg md:text-xl font-light max-w-xl mx-auto"
          >
            We&apos;re here to help you with all your cleaning needs. Reach out through any of the options below.
          </motion.p>
        </div>
      </section>

      {/* ───────── Contact Cards ───────── */}
      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CONTACT_CARDS.map((card, i) => (
            <motion.a
              key={card.title}
              href={card.href}
              target={card.href.startsWith("http") ? "_blank" : undefined}
              rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="group relative bg-white/70 backdrop-blur-xl border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-blue-200 hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl ${card.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {card.icon}
              </div>
              <h3 className="text-slate-900 font-semibold text-lg mb-1">{card.title}</h3>
              <p className="text-slate-400 text-sm mb-3">{card.description}</p>
              <p className="text-blue-600 text-sm font-medium group-hover:underline">{card.value}</p>
            </motion.a>
          ))}
        </div>
      </section>

      {/* ───────── Form + Map Grid ───────── */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* ── Left: Contact Form ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <div className="relative bg-white/70 backdrop-blur-xl border border-slate-200/80 rounded-3xl shadow-xl shadow-slate-200/40 p-8 md:p-10">
              <div className="absolute -top-px left-1/2 -translate-x-1/2 w-1/3 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full" />

              <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">Send Us a Message</h2>
              <p className="text-slate-500 text-sm font-light mb-8">
                Fill out the form and we&apos;ll get back to you within 24 hours.
              </p>

              <form onSubmit={onSubmit} className="space-y-6">
                {/* Name + Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className={labelBase}>
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input id="contact-name" name="name" type="text" required placeholder="John Smith" className={inputBase} />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className={labelBase}>
                      Phone Number <span className="text-red-400">*</span>
                    </label>
                    <input id="contact-phone" name="phone" type="tel" required placeholder="+61 4XX XXX XXX" className={inputBase} />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" className={labelBase}>
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input id="contact-email" name="email" type="email" required placeholder="you@example.com" className={inputBase} />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="contact-subject" className={labelBase}>
                    Subject
                  </label>
                  <select
                    id="contact-subject"
                    name="subject_type"
                    className={`${inputBase} appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%2394a3b8%22%20d%3D%22M6%208L1%203h10z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_1rem_center]`}
                    defaultValue=""
                  >
                    <option value="" disabled>Select a subject</option>
                    {SUBJECTS.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className={labelBase}>
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    placeholder="How can we help you?"
                    className={`${inputBase} resize-none`}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold text-lg py-4 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 active:scale-[0.98] disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>

                {/* Result */}
                <div ref={resultRef}>
                  {result === "success" && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-green-50 border border-green-200 text-green-700 rounded-xl px-6 py-4 text-center text-[15px] font-medium">
                      ✅ Message sent successfully! We&apos;ll get back to you soon.
                    </motion.div>
                  )}
                  {result === "error" && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-red-50 border border-red-200 text-red-600 rounded-xl px-6 py-4 text-center text-[15px] font-medium">
                      ❌ Something went wrong. Please try again or call us directly.
                    </motion.div>
                  )}
                </div>
              </form>
            </div>
          </motion.div>

          {/* ── Right: Map + Trust ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {/* Google Map Embed */}
            <div className="relative bg-white/70 backdrop-blur-xl border border-slate-200/80 rounded-3xl shadow-lg overflow-hidden flex-1 min-h-[300px]">
              <iframe
                title="Rani Delight Services Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.2!2d151.0034!3d-33.8151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a3191ef3e4cd%3A0x0!2s36+Cowper+St%2C+Parramatta+NSW+2150!5e0!3m2!1sen!2sau!4v1"
                className="w-full h-full min-h-[300px] border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Trust card */}
            <div className="bg-white/70 backdrop-blur-xl border border-slate-200/80 rounded-3xl shadow-lg p-7">
              <h3 className="text-lg font-bold text-slate-900 mb-5 tracking-tight">Why Contact Us?</h3>
              <div className="space-y-4">
                {TRUST_ITEMS.map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <span className={`w-9 h-9 rounded-lg ${item.color} flex items-center justify-center shrink-0`}>
                      {item.icon}
                    </span>
                    <span className="text-slate-600 text-sm font-medium">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* Quick CTA */}
              <div className="mt-7 pt-6 border-t border-slate-100">
                <a
                  href="/booknow"
                  className="block w-full text-center bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg text-sm tracking-wide"
                >
                  Book a Cleaning Now →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
