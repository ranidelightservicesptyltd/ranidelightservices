"use client";

import { motion } from "framer-motion";

const frequencies = [
  {
    title: "Weekly",
    desc: "Best for busy households and families who need continuous maintenance.",
    popular: true
  },
  {
    title: "Bi-Weekly",
    desc: "The perfect balance for maintaining high standards with a recurring touch-up.",
    popular: false
  },
  {
    title: "Monthly",
    desc: "Ideal for low-traffic residences needing a professional thorough reset.",
    popular: false
  },
  {
    title: "One-Time",
    desc: "Deep cleans, move-in/out, or post-event clinical sanitation.",
    popular: false
  }
];

export default function ServiceFrequencies() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4 md:mb-6 leading-tight">
            Flexible <span className="text-blue-600">Frequencies</span>
          </h2>
          <p className="text-slate-500 text-base md:text-lg font-light max-w-2xl mx-auto px-4">
            Choose the schedule that fits your lifestyle. Our plans are customizable and can be adjusted as your needs evolve.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {frequencies.map((freq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`p-6 md:p-8 rounded-2xl md:rounded-3xl border ${freq.popular ? "border-blue-600 bg-blue-50/50" : "border-slate-200 bg-slate-100"} relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500`}
            >
              {freq.popular && (
                <div className="absolute top-4 right-4 px-3 py-1 bg-blue-600 text-slate-100 text-[10px] font-bold uppercase tracking-widest rounded-full">
                  Popular
                </div>
              )}
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 md:mb-4">{freq.title}</h3>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-light mb-2">
                {freq.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 md:mt-20 p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] bg-black border border-slate-800/20 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-12">
          {/* Background Gradient */}
          <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-blue-500/10 blur-[80px] md:blur-[120px]" />

          <div className="relative z-10 max-w-xl text-center lg:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-100 mb-4 italic">Imagine the hours you could save every week...</h3>
            <p className="text-slate-100/40 text-base md:text-lg font-light leading-relaxed">
              Give yourself the gift of time. Let our trained professionals handle the nitty-gritty while you focus on what truly matters.
            </p>
          </div>

          <div className="relative z-10 w-full sm:w-auto">
            <a
              href="https://api.whatsapp.com/send/?phone=61478815629&text=Hi%2C+I%27d+like+to+enquire+about+your+cleaning+services.&type=phone_number&app_absent=0"
              target="_blank"
              className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-slate-100 text-slate-900 rounded-full font-bold hover:bg-slate-200 transition-colors shadow-2xl block text-center"
            >
              Start My Free Estimate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
