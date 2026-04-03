"use client";

import { motion } from "framer-motion";
import StarBorder from "./StarBorder";

export default function CallToAction() {
  return (
    <section className="relative py-32 px-6 md:px-12 bg-[var(--color-secondary-bg)] z-10 w-full overflow-hidden">

      <div className="relative max-w-4xl mx-auto text-center z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl lg:text-8xl font-medium text-[var(--color-text-main)] tracking-tighter mb-6"
        >
          Ready for a Spotless Home?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-[var(--color-text-muted)] text-xl md:text-3xl font-light mb-12"
        >
          Book your professional cleaning today.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <a
            href="/booknow"
            className="group inline-flex items-center gap-3 bg-[var(--color-brand-blue)] text-white px-10 py-4 rounded-full text-lg font-medium tracking-wide hover:opacity-90 hover:scale-[1.02] shadow-lg shadow-blue-500/20 transition-all"
          >
            <span>Schedule a Cleaning</span>
            <svg
              className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
