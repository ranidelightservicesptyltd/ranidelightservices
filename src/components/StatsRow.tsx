"use client";

import { motion, useSpring, useInView, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
  { value: "500+", target: 500, suffix: "+", label: "Homes Cleaned" },
  { value: "98%", target: 98, suffix: "%", label: "Client Satisfaction" },
  { value: "7 Days", target: 7, suffix: " Days", label: "Availability" },
  { value: "5 Star", target: 5, suffix: " Star", label: "Rated Service" },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  
  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 20,
    mass: 1,
  });

  // Transform the spring value into a rounded integer string for rendering
  const displayValue = useTransform(springValue, (latest: number) => Math.round(latest));

  useEffect(() => {
    if (inView) {
      springValue.set(target);
    }
  }, [inView, springValue, target]);

  return (
    <div ref={ref} className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-slate-900 flex flex-col items-center">
      <motion.span className="leading-none">{displayValue}</motion.span>
      {suffix && <span className="text-4xl md:text-5xl lg:text-6xl mt-[-0.2em]">{suffix}</span>}
    </div>
  );
}

export default function StatsRow() {
  return (
    <section className="py-40 bg-white relative z-10 w-full overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-8 text-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: idx * 0.1,
                ease: [0.21, 0.47, 0.32, 0.98]
              }}
              className="flex flex-col items-center justify-center space-y-4"
            >
              <AnimatedCounter target={stat.target} suffix={stat.suffix} />
              
              <div className="text-xs md:text-sm tracking-[0.3em] text-slate-500 uppercase font-bold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
