"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Bespoke Consultation",
    description: "We begin with a thorough assessment of your space, identifying delicate surfaces and personal preferences to create a tailored cleaning protocol.",
  },
  {
    number: "02",
    title: "Elite Execution",
    description: "Our highly trained professionals deploy premium, eco-friendly solutions and advanced techniques to ensure an unparalleled level of pristine detail.",
  },
  {
    number: "03",
    title: "Quality Assurance",
    description: "A final meticulous inspection ensures every corner exceeds our rigorous luxury standards, leaving your sanctuary in perfect harmony.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 px-6 md:px-12 bg-gray-50 relative z-10 w-full border-y border-slate-200">
      <div className="max-w-6xl mx-auto">
        <div className="mb-24 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-7xl font-medium text-slate-900 tracking-tighter mb-6"
          >
            How It Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-slate-500 text-lg md:text-xl font-light max-w-2xl mx-auto"
          >
            Our seamless process is designed for your absolute peace of mind.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="relative p-8 rounded-2xl border border-slate-200 bg-white hover:border-blue-200 shadow-sm hover:shadow-xl transition-all duration-500 group"
            >
              <div className="text-5xl font-bold text-blue-100 mb-6 group-hover:text-blue-200 transition-colors duration-500">
                {step.number}
              </div>
              <h3 className="text-2xl font-medium text-slate-900 mb-4 tracking-tight">
                {step.title}
              </h3>
              <p className="text-slate-600 font-light leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
