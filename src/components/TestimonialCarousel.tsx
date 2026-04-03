"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "The team turned clutter and chaos into spotless perfection in under two hours. The glassmorphism slider above genuinely proves they work miracles.",
    name: "Michael J.",
    role: "Homeowner",
  },
  {
    text: "Booking was incredibly easy and the place looked brand new. The before and after on my bathroom tiles was unbelievable.",
    name: "Rabya T.",
    role: "Tenant",
  },
  {
    text: "Five stars for speed, smiles and a spotless clean. They brought their own eco-friendly supplies and left the house smelling amazing.",
    name: "Jasmine S.",
    role: "Office Manager",
  },
  {
    text: "I've tried multiple cleaning services before, but Rani Delight is on another level. The attention to detail is unmatched, and they left no corner untouched.",
    name: "David L.",
    role: "Realtor",
  },
  {
    text: "Professional, punctual, and extremely thorough. They managed to remove stains from our carpet that I thought were permanent. Highly recommended!",
    name: "Sarah W.",
    role: "Homeowner",
  },
  {
    text: "As a working mom, I barely have time to clean. Coming home to a spotless, fresh-smelling house after their visit feels like an absolute luxury.",
    name: "Emily R.",
    role: "Working Parent",
  },
  {
    text: "Outstanding service from start to finish. The booking process is seamless, and the cleaning crew is friendly, trustworthy, and very efficient.",
    name: "Mark T.",
    role: "Business Owner",
  },
  {
    text: "We hired them for a move-out clean, and our landlord was so impressed that we got our full deposit back without any questions. Worth every penny.",
    name: "Chloe M.",
    role: "Tenant",
  },
  {
    text: "The eco-friendly products they use are fantastic. I love knowing my home is sparkling clean without any harsh chemical smells lingering around.",
    name: "Jessica B.",
    role: "Homeowner",
  },
  {
    text: "Reliable and consistent. Every time they visit, the quality of work is exactly the same—perfect. They truly care about their customers.",
    name: "Thomas K.",
    role: "Long-term Client",
  },
  {
    text: "I booked a deep clean right before hosting a major family event. The house looked pristine, and multiple guests asked me for my cleaning service's number.",
    name: "Amanda F.",
    role: "Event Host",
  },
  {
    text: "What impressed me most was their efficiency. They tackled our large office space without disrupting our workflow, and the results were immaculate.",
    name: "Brian H.",
    role: "Operations Manager",
  },
];

export default function TestimonialCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5); // 5px buffer
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = direction === "left" ? -carouselRef.current.clientWidth : carouselRef.current.clientWidth;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      setTimeout(checkScroll, 500); // Check after smooth scroll completes
    }
  };

  return (
    <section className="py-32 px-6 md:px-12 bg-[var(--color-secondary-bg)] relative z-10 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="text-left text-balance max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-7xl font-medium text-[var(--color-text-main)] tracking-tighter mb-4"
            >
              Client Stories
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-[var(--color-text-muted)] text-lg md:text-xl font-light"
            >
              Hear from our delighted customers
            </motion.p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-300 ${
                canScrollLeft 
                  ? "border-slate-300 text-[var(--color-text-muted)] hover:bg-slate-100 hover:border-[var(--color-brand-blue)] hover:text-[var(--color-brand-blue)]" 
                  : "border-slate-200 text-slate-300 cursor-not-allowed"
              }`}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-300 ${
                canScrollRight 
                  ? "border-slate-300 text-[var(--color-text-muted)] hover:bg-slate-100 hover:border-[var(--color-brand-blue)] hover:text-[var(--color-brand-blue)]" 
                  : "border-slate-200 text-slate-300 cursor-not-allowed"
              }`}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          ref={carouselRef}
          onScroll={checkScroll}
          className="flex overflow-x-auto gap-8 pb-12 pt-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: Math.min(i * 0.15, 0.45) }}
              className="snap-start min-w-[100%] md:min-w-[calc(50%-1rem)] lg:min-w-[calc(33.333%-1.33rem)] bg-white border border-slate-200 rounded-3xl p-8 md:p-10 flex flex-col justify-between hover:-translate-y-2 hover:bg-slate-50 hover:border-blue-200 shadow-sm hover:shadow-xl transition-all duration-500 ease-out group"
            >
              <div>
                <div className="flex gap-1.5 mb-8">
                  {[...Array(5)].map((_, starIndex) => (
                    <svg
                      key={starIndex}
                      className="w-5 h-5 text-[var(--color-brand-yellow)]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[var(--color-text-muted)] text-lg md:text-xl leading-relaxed italic mb-10 font-light">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>
              <div>
                <p className="text-[var(--color-text-main)] font-medium text-lg tracking-wide">{t.name}</p>
                <p className="text-[var(--color-brand-blue)] text-sm tracking-widest uppercase mt-1">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
