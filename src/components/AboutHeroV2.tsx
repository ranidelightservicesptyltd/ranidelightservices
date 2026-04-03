"use client";

import { motion } from "framer-motion";

export default function AboutHeroV2() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden bg-gray-50">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[60%] h-full bg-white/80 -skew-x-12 translate-x-1/4 pointer-events-none shadow-xl shadow-black/5" />
      
      <div className="max-w-7xl mx-auto relative w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
          <div>
            <span className="text-slate-500 font-bold uppercase tracking-[0.3em] text-xs mb-6 block">Meet The Specialist</span>
            <h1 className="text-5xl md:text-8xl font-bold text-slate-900 leading-[1.05] tracking-tight mb-8">
              Hi, I’m <br />
              <span className="text-blue-600">Rita Rani.</span>
            </h1>
            <p className="text-slate-600 text-lg md:text-2xl font-light leading-relaxed max-w-xl">
              I specialize in providing a premium, all-in-one cleaning service that covers every part of your home. Whether you are moving out or simply want your space to feel renewed, I am here to help.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] bg-white rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-2xl shadow-blue-900/10 relative border border-slate-200">
              <img 
                src="/rita-rani.png" 
                alt="Rita Rani" 
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              
              <div className="absolute bottom-10 left-10 right-10 flex items-center justify-between">
                <div>
                   <span className="block text-white font-bold text-xl">Rita Rani</span>
                   <span className="text-white/70 text-sm italic">Founder & Specialist</span>
                </div>
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                   <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                   </svg>
                </div>
              </div>
            </div>

            {/* Floating Accents */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-yellow-400/20 rounded-full blur-3xl pointer-events-none" />

          </div>
        </div>
      </div>
    </section>
  );
}
