"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Home Cleaning",
    description: "Comprehensive cleaning for every room, ensuring your home is a spotless sanctuary.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "Office Cleaning",
    description: "Maintain a pristine and productive workspace with our professional commercial cleaning.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Bathroom Deep Clean",
    description: "Eradicate tough stains and soap scum for a crystal-clear, hygienic bathroom.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: "Move-in / Move-out",
    description: "Seamless transitions with deep cleans that guarantee a spotless handover.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-24 px-6 md:px-12 bg-[var(--color-light-gray)] relative z-10 w-full">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-medium text-[var(--color-primary-black)] tracking-tighter mb-4"
          >
            Premium Services
          </motion.h2>
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.8, delay: 0.1 }}
             className="text-[var(--color-primary-black)]/70 text-lg md:text-xl font-light"
          >
            Tailored cleaning solutions for your lifestyle
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group relative h-full bg-white rounded-3xl border border-slate-200 hover:border-blue-300 transition-all duration-700 ease-out overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-blue-900/5 hover:-translate-y-1"
            >
              {/* Subtle Inner Glow Border */}
              <div className="absolute inset-0 rounded-3xl border border-slate-50 pointer-events-none" />
              
              {/* Shimmer Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-100/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

              <div className="p-8 md:p-12 h-full flex flex-col relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-8 group-hover:bg-blue-100 group-hover:border-blue-200 transition-all duration-500 shadow-sm">
                  <div className="text-blue-600 w-8 h-8 group-hover:scale-110 transition-transform duration-500">
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300 tracking-tight">
                  {service.title}
                </h3>
                
                <p className="text-slate-500 leading-relaxed font-light text-base md:text-lg">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
