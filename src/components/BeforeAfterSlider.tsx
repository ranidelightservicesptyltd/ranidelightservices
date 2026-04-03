"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

interface SliderProps {
  beforeImage: string;
  afterImage: string;
  label: string;
}

function SingleSlider({ beforeImage, afterImage, label }: SliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const clipRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const [pos, setPos] = useState(50); // only for label opacity

  const updateSlider = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));

    // Direct DOM update — zero lag, no React re-render needed
    if (clipRef.current) {
      clipRef.current.style.clipPath = `polygon(0 0, ${percent}% 0, ${percent}% 100%, 0 100%)`;
    }
    if (handleRef.current) {
      handleRef.current.style.left = `${percent}%`;
    }
    setPos(percent);
  }, []);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (isDraggingRef.current) {
        e.preventDefault();
        updateSlider(e.clientX);
      }
    };
    const onTouchMove = (e: TouchEvent) => {
      if (isDraggingRef.current) {
        e.preventDefault();
        updateSlider(e.touches[0].clientX);
      }
    };
    const onEnd = () => { isDraggingRef.current = false; };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onEnd);
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onEnd);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onEnd);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onEnd);
    };
  }, [updateSlider]);

  const startDrag = (clientX: number) => {
    isDraggingRef.current = true;
    updateSlider(clientX);
  };

  return (
    <div className="flex flex-col items-center w-full">
      <h3 className="text-slate-700 text-xl md:text-2xl font-medium tracking-wide mb-6">
        {label}
      </h3>
      <div
        ref={containerRef}
        className="relative w-full aspect-video rounded-2xl overflow-hidden cursor-ew-resize select-none border border-slate-200 shadow-2xl"
        onMouseDown={(e) => startDrag(e.clientX)}
        onTouchStart={(e) => startDrag(e.touches[0].clientX)}
      >
        {/* Dirty Image (Background) */}
        <img
          src={beforeImage}
          alt={`Dirty ${label}`}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          draggable={false}
        />

        {/* Clean Image (Clipped overlay) */}
        <div
          ref={clipRef}
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ clipPath: `polygon(0 0, 50% 0, 50% 100%, 0 100%)` }}
        >
          <img
            src={afterImage}
            alt={`Clean ${label}`}
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
          />
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm text-slate-800 shadow-sm border border-slate-200 text-xs tracking-wider uppercase px-3 py-1.5 rounded-full z-10">
          Clean
        </div>
        <div
          className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm text-slate-800 shadow-sm border border-slate-200 text-xs tracking-wider uppercase px-3 py-1.5 rounded-full z-10 transition-opacity duration-300"
          style={{ opacity: pos > 85 ? 0 : 1 }}
        >
          Dirty
        </div>

        {/* Slider Handle — NO transitions, snaps instantly */}
        <div
          ref={handleRef}
          className="absolute top-0 bottom-0 z-20 pointer-events-none"
          style={{ left: '50%' }}
        >
          {/* Vertical line */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[3px] bg-white shadow-[0_0_8px_rgba(0,0,0,0.3)]" />
          {/* Circle handle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-xl border-2 border-white">
            <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 9l4-4 4 4m0 6l-4 4-4-4" transform="rotate(90 12 12)" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

const comparisonData = [
  {
    beforeImage: "/examples/v2_dirty_kitchen.png",
    afterImage: "/examples/v2_clean_kitchen.png",
    label: "Kitchen Detailing",
  },
  {
    beforeImage: "/examples/v2_dirty_glass.png",
    afterImage: "/examples/v2_clean_glass.png",
    label: "Hard Water Removal",
  },
  {
    beforeImage: "/examples/v2_dirty_table.png",
    afterImage: "/examples/v2_clean_table.png",
    label: "Surface Restoration",
  },
];

export default function BeforeAfterSlider() {
  return (
    <section className="py-32 px-6 md:px-12 bg-white relative z-10 w-full">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 text-balance">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-7xl font-medium text-slate-900 tracking-tighter mb-4"
          >
            See The Difference
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-slate-500 text-lg md:text-xl font-light max-w-2xl mx-auto"
          >
            Drag the slider to reveal the transformative power of professional cleaning
          </motion.p>
        </div>

        <div className="flex flex-col gap-24">
          {comparisonData.map((data, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <SingleSlider {...data} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
