"use client";

import { motion } from "framer-motion";

export default function AboutStoryV2() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-white text-slate-900 overflow-hidden relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
        <div className="relative">
            <div className="absolute top-1/2 left-0 w-32 h-32 bg-slate-200 blur-3xl -translate-y-1/2 -z-10" />
           <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-8"
           >
             I Go Beyond <br />
             <span className="text-blue-500">Surface Cleaning.</span>
           </motion.h2>
           <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-slate-500 text-lg md:text-xl font-light leading-relaxed mb-10"
           >
             I focus on deep, thorough cleaning. Because I use my own professional-grade equipment, I deliver results that standard cleaning services often cannot match. My expertise ensures your space is not just clean, it's Rani Delight clean.
           </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="p-8 rounded-[2rem] bg-slate-50 border border-slate-200 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
           >
              <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-500 mb-6 border border-blue-500/20">
                 <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                 </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Attention To Detail</h3>
              <p className="text-slate-500 text-sm leading-relaxed">I focus on areas that are often missed, such as skirting boards, door frames, and tracks.</p>
           </motion.div>

           <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="p-8 rounded-[2rem] bg-slate-50 border border-slate-200 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
           >
              <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-500 mb-6 border border-blue-500/20">
                 <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                 </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Reliable & Insured</h3>
              <p className="text-slate-500 text-sm leading-relaxed">I arrive on time, communicate clearly, and treat your home with care and respect.</p>
           </motion.div>
        </div>
      </div>
    </section>
  );
}
