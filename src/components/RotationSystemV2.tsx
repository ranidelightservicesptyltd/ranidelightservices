"use client";

import { motion } from "framer-motion";

const rotationSteps = [
  {
    title: "Initial Deep Cleans",
    subtitle: "Setting the Foundation",
    desc: "For your first two visits, we bring your home up to our 'Gold Standard.' We perform an intensive deep clean of kitchens and bathrooms on visit one, followed by sleeping and living areas on visit two.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: "Detail Rotation Cycle",
    subtitle: "Perpetual Perfection",
    desc: "Once specialized, we rotate a detail-clean of one of four specific zones (Kitchen, Bathrooms, Sleeping, Living) on every visit, while maintaining the rest of your home with our elite standards.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    )
  },
  {
    title: "Quality Shield Check",
    subtitle: "24-Hour Guarantee",
    desc: "Every visit is followed by a quality audit. If any area doesn't meet your absolute satisfaction, we return within 24 hours to reclean it at no extra cost.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  }
];

export default function RotationSystemV2() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 md:mb-6 tracking-tight">
            The Detail-Clean <br />
            <span className="text-blue-600">Rotation System®</span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg font-light leading-relaxed px-4">
            Standard cleaning focuses on the visible. We focus on the invisible. Our systematic approach ensures your property is never just "surface clean"—it's meticulously maintained.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12 relative">
          {/* Connector Line - Hidden on Mobile */}
          <div className="hidden md:block absolute top-[45px] left-[15%] right-[15%] h-[1px] bg-blue-100 z-0" />
          
          {rotationSteps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl md:rounded-3xl bg-blue-50/50 border border-blue-100 flex items-center justify-center text-blue-600 shadow-xl shadow-blue-500/5 mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-500 backdrop-blur-sm">
                <div className="absolute inset-0 bg-blue-600 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-10 scale-0 group-hover:scale-100 transition-all duration-500" />
                {step.icon}
              </div>
              
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
              <span className="text-blue-600 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-3 md:mb-4 block">
                {step.subtitle}
              </span>
              <p className="text-slate-500 text-sm leading-relaxed font-light px-2 md:px-4">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
