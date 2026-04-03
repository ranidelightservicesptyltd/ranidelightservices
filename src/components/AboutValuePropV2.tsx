"use client";

import { motion } from "framer-motion";

export default function AboutValuePropV2() {
  const offerings = [
    {
      title: "End-of-Lease Cleaning",
      items: ["Comprehensive bond-back cleans", "Professional Oven Cleaning", "Interior Windows & Tracks"]
    },
    {
      title: "Upholstery & Carpet",
      items: ["High-powered Steam Cleaning", "Dirt & Allergen Removal", "Sofas, Mattresses, Rugs"]
    },
    {
      title: "Domestic & Deep Clean",
      items: ["Regular Weekly/Fortnightly", "Internal Windows", "Skirting Boards & Door Frames"]
    }
  ];

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
           <span className="text-slate-500 font-bold uppercase tracking-widest text-xs mb-4 block">Our Commitment</span>
           <h2 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight">Technical Excellence.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
           {offerings.map((offer, idx) => (
             <motion.div 
               key={idx}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.1 }}
               className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-200 hover:shadow-xl transition-all duration-500 group"
             >
                <h3 className="text-2xl font-bold text-slate-900 mb-6">{offer.title}</h3>
                <ul className="space-y-4">
                   {offer.items.map((item, iIdx) => (
                     <li key={iIdx} className="flex items-start gap-3 text-slate-600 group">
                        <svg className="w-5 h-5 text-blue-600 mt-1 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                           <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="font-light leading-snug">{item}</span>
                     </li>
                   ))}
                </ul>
             </motion.div>
           ))}
        </div>

        <div className="p-10 md:p-16 rounded-[3rem] bg-white shadow-2xl shadow-blue-900/5 overflow-hidden relative border border-slate-200">
           <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2" />
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                 <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Full Equipment Provided</h3>
                 <p className="text-slate-600 text-lg font-light leading-relaxed mb-8">
                   We bring all necessary professional-grade equipment, including high-suction vacuums, deep-steam cleaners, and premium eco-friendly supplies to every single job.
                 </p>
                 <div className="flex flex-wrap gap-4">
                    {["Premium Supplies", "Expert Equipment", "Eco-Friendly"].map((badge, idx) => (
                      <span key={idx} className="px-5 py-2 rounded-full bg-slate-50 border border-slate-200 text-slate-600 text-xs font-bold uppercase tracking-wider">
                         {badge}
                      </span>
                    ))}
                 </div>
              </div>
              <div className="relative group">
                 <div className="aspect-video bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 shadow-xl">
                    <img 
                      src="/cleaning-equipment.png" 
                      alt="Professional Cleaning Equipment" 
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
