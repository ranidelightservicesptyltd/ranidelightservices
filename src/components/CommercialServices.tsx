"use client";

import { motion } from "framer-motion";

const commercialServices = [
  {
    title: "General Office Sanitation",
    desc: "Maintaining a professional and healthy workspace for your employees and clients.",
    details: ["Daily trash/recycling removal", "Disinfection of high-touch surfaces", "Reception area detailing", "Restroom sanitation & restocking"]
  },
  {
    title: "Janitorial Services",
    desc: "Long-term maintenance plans tailored to your facility's operational needs.",
    details: ["Hard floor stripping & waxing", "Carpet steam cleaning", "Window cleaning (interior/exterior)", "Light fixture & vent dusting"]
  },
  {
    title: "Industrial & Retail",
    desc: "Specialized cleaning for high-traffic environments and specialty surfaces.",
    details: ["Showroom floor polishing", "Display case cleaning", "Warehouse floor scrubbing", "Clinical-grade sanitization"]
  }
];

export default function CommercialServices() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16 md:mb-20 text-center mx-auto">
          <div className="text-blue-600 font-bold uppercase tracking-widest text-[10px] md:text-xs mb-3 md:mb-4">Corporate Solutions</div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4 md:mb-6 leading-tight">
            Commercial & <br className="hidden md:block" />
            <span className="text-blue-600">Janitorial</span> Expertise
          </h2>
          <p className="text-slate-500 text-base md:text-lg font-light leading-relaxed px-4 md:px-0">
            From high-rise offices to boutique retail spaces, we deliver professional cleaning solutions that protect your brand and your people.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {commercialServices.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-slate-100 p-8 md:p-10 rounded-[1.5rem] md:rounded-[2rem] border border-slate-200 shadow-xl shadow-slate-200/50 hover:shadow-blue-200/50 transition-all duration-500"
            >
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 md:mb-4">{service.title}</h3>
              <p className="text-slate-500 text-xs md:text-sm font-light mb-6 md:mb-8 leading-relaxed">
                {service.desc}
              </p>
              <ul className="space-y-3">
                {service.details.map((detail, didx) => (
                  <li key={didx} className="flex items-center gap-3 text-slate-700 text-[10px] md:text-xs font-semibold">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
